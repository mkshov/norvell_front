/**
 * Public catalog API — no authorization required.
 * Endpoint: /product/v1/public-rr-products/
 *
 * Rate limit: 60 req/min per IP.
 * Max limit per page: 100.
 */
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.smarty.roberto-riera.com";
const PUBLIC_API = `${BASE_URL}/product/v1/public-rr-products`;

const PUBLIC_HEADERS: HeadersInit = {
	"Content-Type": "application/json",
};

export interface ApiImage {
	id: number;
	image: string;
	image_s: string;
	image_m: string;
	image_l: string;
	is_main: boolean;
	position: number | null;
	show_in_list: boolean;
}

export interface ApiProduct {
	id: number;
	name: string;
	model: string;
	model_code: string;
	vendor_code: string;
	type: number;
	image: string | null;
	price: string;
	final_price: string;
	discount_percent: string;
	is_novelty: boolean;
	is_discount: boolean;
	quantity: number;
	images: ApiImage[];
	is_favorite: boolean;
	is_available_online: boolean;
}

export interface ApiResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: ApiProduct[];
}

function multiplyPrice(p: ApiProduct): ApiProduct {
	return {
		...p,
		price: String(parseFloat(p.price) * 9),
		final_price: String(parseFloat(p.final_price) * 9),
	};
}

// ── List / Filtered ──────────────────────────────────────────────────────────

export async function fetchProducts(params: Record<string, string | number | string[]> = {}): Promise<ApiResponse> {
	const url = new URL(`${PUBLIC_API}/`);

	Object.entries(params).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			value.forEach((v) => url.searchParams.append(key, String(v)));
		} else {
			url.searchParams.set(key, String(value));
		}
	});

	const res = await fetch(url.toString(), {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`API error: ${res.status}`);

	const data = await res.json();
	data.results = data.results.map(multiplyPrice);
	return data;
}

export async function fetchProductsByType(typeIds: number[], extraParams: Record<string, string | number> = {}): Promise<ApiResponse> {
	const url = new URL(`${PUBLIC_API}/`);
	typeIds.forEach((id) => url.searchParams.append("type", String(id)));
	Object.entries(extraParams).forEach(([key, value]) => url.searchParams.set(key, String(value)));

	const res = await fetch(url.toString(), {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`API error: ${res.status}`);

	const data = await res.json();
	data.results = data.results.map(multiplyPrice);
	return data;
}

// ── Single product ───────────────────────────────────────────────────────────

export async function fetchProductById(id: number): Promise<ApiProduct> {
	const res = await fetch(`${PUBLIC_API}/${id}/`, {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`API error: ${res.status}`);

	const data = await res.json();
	data.price = String(parseFloat(data.price) * 9);
	data.final_price = String(parseFloat(data.final_price) * 9);
	return data;
}

// ── Size grid ────────────────────────────────────────────────────────────────

export interface ApiSizeGrid {
	sizes: string[];
	availability: Array<{
		size_id: number;
		size_name: string;
		free: number;
		can_add: number;
	}>;
	stock_breakdown: Record<string, { free: number }>;
}

export async function fetchProductSizes(id: number): Promise<ApiSizeGrid> {
	const res = await fetch(`${PUBLIC_API}/${id}/size-grid/`, {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`API error fetching sizes: ${res.status}`);

	return res.json();
}

// ── Similar & Recommendations ────────────────────────────────────────────────

export async function fetchSimilarProducts(id: number): Promise<ApiProduct[]> {
	const res = await fetch(`${PUBLIC_API}/${id}/similar/`, {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`API error fetching similar: ${res.status}`);

	const data = await res.json();
	const results = Array.isArray(data) ? data : data.results ?? [];
	return results.map(multiplyPrice);
}

export async function fetchRecommendedProducts(id: number): Promise<ApiProduct[]> {
	const res = await fetch(`${PUBLIC_API}/${id}/recommendations/`, {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 60 },
	});

	if (!res.ok) throw new Error(`API error fetching recommendations: ${res.status}`);

	const data = await res.json();
	const results = Array.isArray(data) ? data : data.results ?? [];
	return results.map(multiplyPrice);
}

// ── Popular ──────────────────────────────────────────────────────────────────

export async function fetchPopularProducts(): Promise<ApiProduct[]> {
	const res = await fetch(`${PUBLIC_API}/popular/`, {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 300 },
	});

	if (!res.ok) throw new Error(`API error fetching popular: ${res.status}`);

	const data = await res.json();
	const results = Array.isArray(data) ? data : data.results ?? [];
	return results.map(multiplyPrice);
}

// ── Autocomplete / Search ────────────────────────────────────────────────────

export async function fetchAutocomplete(query: string): Promise<{ id: number; name: string; model: string }[]> {
	const url = new URL(`${PUBLIC_API}/autocomplete/`);
	url.searchParams.set("q", query);

	const res = await fetch(url.toString(), {
		headers: PUBLIC_HEADERS,
	});

	if (!res.ok) throw new Error(`API error fetching autocomplete: ${res.status}`);

	const data = await res.json();
	return Array.isArray(data) ? data : data.results ?? [];
}

export async function fetchPopularQueries(): Promise<string[]> {
	const res = await fetch(`${PUBLIC_API}/popular-queries/`, {
		headers: PUBLIC_HEADERS,
		next: { revalidate: 600 },
	});

	if (!res.ok) throw new Error(`API error fetching popular queries: ${res.status}`);

	const data = await res.json();
	return Array.isArray(data) ? data : data.results ?? [];
}

// ── Image helpers ────────────────────────────────────────────────────────────

export function getMainImage(product: ApiProduct): string {
	const mainImg = product.images.find((img) => img.is_main);
	return mainImg?.image_m || mainImg?.image || product.images[0]?.image_m || product.images[0]?.image || "/placeholder.jpg";
}

export function getListImages(product: ApiProduct): string[] {
	return product.images
		.filter((img) => img.show_in_list)
		.sort((a, b) => (a.position ?? 99) - (b.position ?? 99))
		.map((img) => img.image_m || img.image);
}
