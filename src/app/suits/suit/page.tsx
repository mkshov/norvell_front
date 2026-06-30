import React from "react";
import { Metadata } from "next";
import ApiProductsPage from "@/components/ApiProductsPage";

export const metadata: Metadata = {
	title: "Norvell - Мужские костюмы двойка",
	description:
		"Откройте коллекцию мужских костюмов-двоек от Norvell. Классические и современные модели для работы, встреч и торжеств из премиальных тканей с безупречным кроем.",
};

const SuitPage: React.FC = () => {
	return <ApiProductsPage typeIds={[12]} link="/suits/suit/" />;
};

export default SuitPage;
