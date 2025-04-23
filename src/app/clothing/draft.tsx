"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { MyModal } from "@/components";
import "../suits/products.css";
import { IProduct } from "@/lib/interfaces";
import ProductCard from "@/components/ProductCard";

interface DraftProps {
  nameProduct: string;
  products: IProduct[];
  link: string;
}

const Draft: React.FC<DraftProps> = ({ nameProduct, products: initialProducts, link }) => {
  const [sortPrice, setSortPrice] = useState<"asc" | "desc">("asc");

  const sortedProducts = useMemo(() => {
    const productsCopy = [...initialProducts];
    if (sortPrice === "asc") {
      return productsCopy.sort((a, b) => a.price - b.price);
    } else {
      return productsCopy.sort((a, b) => b.price - a.price);
    }
  }, [initialProducts, sortPrice]);

  const handleChange = (event: React.SyntheticEvent, newValue: "asc" | "desc") => {
    setSortPrice(newValue);
  };

  return (
    <div>
      <Tabs value={sortPrice} onChange={handleChange} centered textColor="secondary" indicatorColor="secondary">
        <Tab sx={{ fontWeight: "bold" }} label="Сначала дешевле" value="asc" />
        <Tab sx={{ fontWeight: "bold" }} label="Сначала дороже" value="desc" />
      </Tabs>
      <div className="card-container">
        {sortedProducts.map((item) => (
          <ProductCard key={item.id} product={item} link={link} />
        ))}
      </div>
      <Box
        sx={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h5" color="secondary">
            Свяжитесь с нами, чтобы получить дополнительную информацию о наших костюмах
          </Typography>
          <MyModal />
        </Box>
      </Box>
    </div>
  );
};

export default Draft;
