"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { styled } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { ApiProduct, getListImages } from "@/utils/api/productsApi";

interface ApiProductCardProps {
	product: ApiProduct;
	link: string;
}

export default function ApiProductCard({ product, link }: ApiProductCardProps) {
	const router = useRouter();
	const [currentIndex, setCurrentIndex] = useState(0);
	const touchStartX = useRef<number | null>(null);

	const images = getListImages(product);
	const displayImages = images.length > 0 ? images : ["/placeholder.jpg"];

	const finalPrice = parseFloat(product.final_price);
	const originalPrice = parseFloat(product.price);
	const hasDiscount = product.is_discount && finalPrice < originalPrice;

	const goTo = (idx: number) => {
		setCurrentIndex((idx + displayImages.length) % displayImages.length);
	};

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};
	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return;
		const delta = touchStartX.current - e.changedTouches[0].clientX;
		if (Math.abs(delta) > 40) goTo(currentIndex + (delta > 0 ? 1 : -1));
		touchStartX.current = null;
	};

	return (
		<Card onClick={() => router.push(`${link}${product.id}`)}>
			{/* Image Area */}
			<ImageBox onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
				<img src={displayImages[currentIndex]} alt={`${product.name} ${product.model}`} onError={(e) => (e.currentTarget.src = "/placeholder.jpg")} />

				{/* Badges */}
				{!product.quantity && <StockBadge>Нет в наличии</StockBadge>}
				{product.is_novelty && product.quantity > 0 && <StockBadge $novelty>Новинка</StockBadge>}

				{/* Arrows */}
				{displayImages.length > 1 && (
					<>
						<Arrow
							className="card-arrow"
							$side="left"
							onClick={(e) => {
								e.stopPropagation();
								goTo(currentIndex - 1);
							}}
						>
							<svg width="8" height="14" viewBox="0 0 8 14" fill="none">
								<path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Arrow>
						<Arrow
							className="card-arrow"
							$side="right"
							onClick={(e) => {
								e.stopPropagation();
								goTo(currentIndex + 1);
							}}
						>
							<svg width="8" height="14" viewBox="0 0 8 14" fill="none">
								<path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</Arrow>
					</>
				)}

				{/* Line dots */}
				{displayImages.length > 1 && (
					<Dots onClick={(e) => e.stopPropagation()}>
						{displayImages.map((_, i) => (
							<Dot
								key={i}
								$active={i === currentIndex}
								onClick={(e) => {
									e.stopPropagation();
									goTo(i);
								}}
							/>
						))}
					</Dots>
				)}
			</ImageBox>

			{/* Text row */}
			<InfoRow>
				<InfoLeft>
					<BrandText>{product.name}</BrandText>
					<ModelText>{product.model}</ModelText>
				</InfoLeft>
				<InfoRight>
					{hasDiscount && <OldPrice>{Math.round(originalPrice).toLocaleString("ru-RU")}₽</OldPrice>}
					<PriceText>{Math.round(finalPrice).toLocaleString("ru-RU")}₽</PriceText>
				</InfoRight>
			</InfoRow>
		</Card>
	);
}

/* ── Styled ── */

const Card = styled("div")({
	width: "calc(100%/5)",
	margin: "8px 8px 30px",
	cursor: "pointer",
	flexShrink: 0,
	"@media (max-width: 860px)": { width: "calc(50% - 16px)" },
	"@media (max-width: 520px)": { width: "calc(100% - 16px)" },
});

const ImageBox = styled("div")({
	position: "relative",
	overflow: "hidden",
	aspectRatio: "2/3",
	backgroundColor: "#f2f2f2",
	"& > img": {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		display: "block",
		transition: "transform 0.4s ease",
	},
	"&:hover > img": { transform: "scale(1.02)" },
	"& .card-arrow": { opacity: 0, transition: "opacity 0.2s" },
	"&:hover .card-arrow": { opacity: 1 },
});

const Arrow = styled("button")<{ $side: "left" | "right" }>(({ $side }) => ({
	position: "absolute",
	top: "50%",
	[$side]: "10px",
	transform: "translateY(-50%)",
	width: "30px",
	height: "30px",
	borderRadius: "50%",
	border: "none",
	backgroundColor: "rgba(255,255,255,0.92)",
	color: "#01041e",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	zIndex: 3,
	boxShadow: "0 1px 6px rgba(0,0,0,0.15)",
	padding: 0,
	"&:hover": { backgroundColor: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.2)" },
}));

const Dots = styled("div")({
	position: "absolute",
	bottom: "8px",
	left: "50%",
	transform: "translateX(-50%)",
	display: "flex",
	gap: "4px",
	zIndex: 3,
});

const Dot = styled("span")<{ $active: boolean }>(({ $active }) => ({
	display: "block",
	width: $active ? "20px" : "12px",
	height: "2px",
	borderRadius: "1px",
	backgroundColor: $active ? "#fff" : "rgba(255,255,255,0.5)",
	transition: "width 0.25s, background-color 0.25s",
	cursor: "pointer",
}));

const StockBadge = styled("div")<{ $novelty?: boolean }>(({ $novelty }) => ({
	position: "absolute",
	top: "10px",
	left: "10px",
	backgroundColor: $novelty ? "rgba(1,4,30,0.85)" : "rgba(80,80,80,0.8)",
	color: "#fff",
	fontSize: "10px",
	letterSpacing: "0.06em",
	padding: "3px 8px",
	zIndex: 2,
	textTransform: "uppercase",
}));

const InfoRow = styled("div")({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	backgroundColor: "#01041e",
	color: "#fff",
	padding: "8px 12px",
	gap: "8px",
});

const InfoLeft = styled("div")({
	display: "flex",
	flexDirection: "column",
	minWidth: 0,
	flex: 1,
	overflow: "hidden",
});

const BrandText = styled("span")({
	fontSize: "18px",
	color: "rgba(255,255,255,0.55)",
	letterSpacing: "0.05em",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	width: "100%",
});

const ModelText = styled("span")({
	fontSize: "12px",
	fontWeight: 400,
	color: "#fff",
	letterSpacing: "0.02em",
	whiteSpace: "nowrap",
	overflow: "hidden",
	textOverflow: "ellipsis",
	lineHeight: 1.4,
	width: "100%",
});

const InfoRight = styled("div")({
	display: "flex",
	flexDirection: "column",
	alignItems: "flex-end",
	flexShrink: 0,
	gap: "1px",
});

const OldPrice = styled("span")({
	fontSize: "12px",
	color: "rgba(255,255,255,0.4)",
	textDecoration: "line-through",
	lineHeight: 1.2,
});

const PriceText = styled("span")({
	fontSize: "17px",
	fontWeight: 500,
	color: "#fff",
	letterSpacing: "0.5px",
});
