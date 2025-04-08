"use client";
import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { MyModal } from "@/components";
import "../suits/products.css";

interface Product {
  id: number;
  route: string;
  route2: string;
  title: string;
  subTitle: string;
  description_en: string;
  price: number;
  price2: number;
  image: string;
  image2: string;
  image3: string;
}

interface DraftProps {
  nameProduct: string;
  products: Product[];
  link: string;
}

const ProductCard = styled(Box)({
  margin: "30px",
  width: "500px",
  transition: "0.7s",
});

const Draft: React.FC<DraftProps> = ({ nameProduct, products: initialProducts, link }) => {
  const router = useRouter();
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

  const handleLinkDetails = (id: number) => () => {
    router.push(`${link}${id}`);
  };

  return (
    <div>
      <Tabs value={sortPrice} onChange={handleChange} centered textColor="secondary" indicatorColor="secondary">
        <Tab sx={{ fontWeight: "bold" }} label="Сначала дешевле" value="asc" />
        <Tab sx={{ fontWeight: "bold" }} label="Сначала дороже" value="desc" />
      </Tabs>
      <div className="card-container">
        {sortedProducts.map((item) => (
          <ProductCard onClick={handleLinkDetails(item.id)} key={item.id}>
            <div className="product-wrapper">
              <img className="product-img" src={item.image} alt={item.title} />
              <div className="middle">
                <Button onClick={handleLinkDetails(item.id)} className="main-button">
                  <SearchIcon />
                </Button>
              </div>
            </div>
            <div className="text">
              <Typography sx={{ fontWeight: "300" }}>{item.title}</Typography>
              <Typography sx={{ fontWeight: "300", letterSpacing: "2px" }}>{item.price}₽</Typography>
            </div>
          </ProductCard>
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
