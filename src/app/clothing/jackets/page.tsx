"use client";
import React from "react";
import Draft from "../draft";
import jackets from "@/utils/mockData/JacketsData";
console.log("jackets: ", jackets);

const Jackets: React.FC = () => {
  return <Draft products={jackets} nameProduct="jackets" link="/clothing/jackets/" />;
};

export default Jackets;
