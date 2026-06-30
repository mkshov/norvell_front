import React from "react";
import { Metadata } from "next";
import ApiProductsPage from "@/components/ApiProductsPage";

export const metadata: Metadata = {
	title: "Norvell - Стильные мужские пиджаки",
	description:
		"Ознакомьтесь с коллекцией мужских пиджаков от Norvell. Элегантные и универсальные модели из премиальных тканей с идеальной посадкой.",
};

const Jackets: React.FC = () => {
	return <ApiProductsPage typeIds={[13]} link="/clothing/jackets/" />;
};

export default Jackets;
