import React from "react";
import Draft from "../draft";
import everyday from "../../../utils/mockData/SuitsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grand Hill - Стильные повседневные мужские костюмы",
  description:
    "Откройте коллекцию повседневных мужских костюмов от Grand Hill. Удобные и стильные модели для работы, встреч и casual-образов. Премиальные ткани, идеальная посадка и современный крой — ваш комфорт каждый день.",
};

const Everyday: React.FC = () => {
  return <Draft products={everyday} nameProduct="suits" link="/suits/everyday/" />;
};

export default Everyday;
