import React from "react";
import Draft from "../draft";
import wedding from "../../../utils/mockData/WeddingData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Hill - Элегантные мужские костюмы на свадьбу",
  description:
    "Выберите идеальный свадебный костюм от Grand Hill. Элегантные модели для жениха и гостей, созданные из премиальных тканей с безупречным кроем. Стиль и комфорт для вашего особенного дня.",
};

const Wedding: React.FC = () => {
  return <Draft products={wedding} nameProduct="wedding" link="/suits/wedding/" />;
};

export default Wedding;
