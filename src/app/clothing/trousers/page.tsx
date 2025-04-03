"use client";
import React from "react";
import Draft from "../draft";
import trousers from "@/utils/mockData/TrousersData";

const Trousers: React.FC = () => {
  return <Draft products={trousers} nameProduct="trousers" link="/clothing/trousers/" />;
};

export default Trousers;
