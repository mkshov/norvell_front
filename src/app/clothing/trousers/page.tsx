import React from "react";
import Draft from "../draft";
import trousers from "@/utils/mockData/TrousersData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Hill - Стильные мужские брюки",
  description:
    "Ознакомьтесь с коллекцией мужских брюк от Grand Hill. Элегантные и универсальные модели из премиальных тканей с идеальной посадкой. Подходят для работы, торжеств и повседневного стиля.",
};

const Trousers: React.FC = () => {
  return <Draft products={trousers} nameProduct="trousers" link="/clothing/trousers/" />;
};

export default Trousers;
