import React from "react";
import Draft from "../draft";
import wedding from "../../../utils/mockData/WeddingData";

const Wedding: React.FC = () => {
  return <Draft products={wedding} nameProduct="wedding" link="/suits/wedding/" />;
};

export default Wedding;
