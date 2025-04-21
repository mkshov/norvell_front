import React from "react";
import Draft from "../draft";
import jackets from "@/utils/mockData/JacketsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Hill - Стильные мужские пиджаки",
  description:
    "Ознакомьтесь с коллекцией мужских пиджаков от Grand Hill. Элегантные и универсальные модели из премиальных тканей с идеальной посадкой. Подходят для работы, торжеств и повседневного стиля.",
};

const Jackets: React.FC = () => {
  return <Draft products={jackets} nameProduct="jackets" link="/clothing/jackets/" />;
};

export default Jackets;
