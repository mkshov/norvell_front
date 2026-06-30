import React from "react";
import { Metadata } from "next";
import ApiProductsPage from "@/components/ApiProductsPage";

export const metadata: Metadata = {
	title: "Norvell - Стильные мужские брюки",
	description:
		"Ознакомьтесь с коллекцией мужских брюк от Norvell. Элегантные и универсальные модели из премиальных тканей с идеальной посадкой.",
};

const Trousers: React.FC = () => {
	return <ApiProductsPage typeIds={[14]} link="/clothing/trousers/" />;
};

export default Trousers;
