import React from "react";
import { Metadata } from "next";
import ApiProductsPage from "@/components/ApiProductsPage";

export const metadata: Metadata = {
	title: "Norvell - Мужские костюмы тройка",
	description:
		"Коллекция мужских костюмов-троек от Norvell. Элегантные модели с жилетом для торжественных мероприятий и деловых встреч. Премиальные ткани, идеальная посадка.",
};

const SuitTrioPage: React.FC = () => {
	return <ApiProductsPage typeIds={[11]} link="/suits/suit-trio/" />;
};

export default SuitTrioPage;
