import React from "react";
import { useRouter } from "next/navigation";
import { IProduct } from "@/lib/interfaces";

import { Button, Typography, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CardSlider from "../Slider/CardSlider";

export default function ProductCard({ product, link }: { product: IProduct; link: string }) {
  const router = useRouter();

  const images = Array.from(new Set([product.image, product.image2, product.image3])).filter(
    (img) => img // Убираем null/undefined
  );

  const handleLinkDetails = (id: number) => () => {
    router.push(`${link}${id}`);
  };
  return (
    <Main onClick={handleLinkDetails(product.id)} key={product.id}>
      <div className="product-wrapper">
        <CardSlider slidesToShow={1} dots={true}>
          {images.map((image, index) => (
            <div key={index} className="slider-image-wrapper">
              <img
                className="product-img"
                src={image}
                alt={`${product.title} ${index + 1}`}
                onError={(e) => (e.currentTarget.src = "/placeholder.jpg")}
              />
            </div>
          ))}
        </CardSlider>
        <div className="middle">
          <Button onClick={handleLinkDetails(product.id)} className="main-button">
            <SearchIcon />
          </Button>
        </div>
      </div>
      <div className="text">
        <Typography sx={{ fontWeight: "300" }}>{product.title}</Typography>
        <Typography sx={{ fontWeight: "300", letterSpacing: "2px" }}>{product.price}₽</Typography>
      </div>
    </Main>
  );
}

const Main = styled("div")({
  margin: "30px",
  width: "500px",
  transition: "0.7s",
  "@media (max-width: 540px)": {
    padding: "0 30px",
    width: "100%",
  },
});
