"use client";
import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import products from "@/utils/mockData/SuitsData";
import jackets from "@/utils/mockData/JacketsData";
import trousers from "@/utils/mockData/TrousersData";
import "../../app/suits/products.css";

// Типизация продукта
interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  route: string;
  route2: string;
}

const Recommended: React.FC = () => {
  const router = useRouter();
  const [recommended, setRecommended] = useState<Product[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  function randomArray(arr1: Product[], arr2: Product[], arr3: Product[]): Product[] {
    const random1 = Math.floor(Math.random() * arr1.length);
    const random2 = Math.floor(Math.random() * arr2.length);
    const random3 = Math.floor(Math.random() * arr3.length);
    return [arr1[random1], arr2[random2], arr3[random3]];
  }

  useEffect(() => {
    setRecommended(randomArray(products, jackets, trousers));
    setIsHydrated(true);
  }, []); // Выполняется только на клиенте после монтирования

  const handleClickNavigate = (route: string) => () => {
    router.push(route);
  };

  // Не рендерим ничего до завершения гидратации
  if (!isHydrated) {
    return null; // Или placeholder, например <div>Loading recommendations...</div>
  }

  return (
    <div className="recommended">
      <Typography variant="h4">recommendedProducts</Typography>
      <img src="https://i.shgcdn.com/b1dfc452-0cb3-40a2-9fa1-4cfdcbfe5f13/-/format/auto/-/preview/3000x3000/-/quality/lighter/" alt="" />
      <div className="recommended-container">
        {recommended.map((item) => (
          <div key={item.id} onClick={handleClickNavigate(`/${item.route}/${item.route2}/${item.id}`)} className="recommended-block">
            <div className="product-wrapper">
              <img className="product-img" src={item.image} alt={item.title} />
              <div className="middle">
                <Button onClick={handleClickNavigate(`/${item.route}/${item.route2}/${item.id}`)} className="main-button">
                  discoverMore
                </Button>
              </div>
            </div>
            <div className="text">
              <Typography sx={{ fontWeight: "300" }}>{item.title}</Typography>
              <Typography sx={{ fontWeight: "300", letterSpacing: "1px" }}>€{item.price}</Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
