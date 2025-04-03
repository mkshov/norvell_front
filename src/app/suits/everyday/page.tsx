import React from "react";
import Draft from "../draft";
import everyday from "../../../utils/mockData/SuitsData";

const Everyday: React.FC = () => {
  return <Draft products={everyday} nameProduct="suits" link="/suits/everyday/" />;
};

export default Everyday;
