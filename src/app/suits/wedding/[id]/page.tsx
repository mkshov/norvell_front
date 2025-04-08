"use client";
import React from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Drawer, MyAccordion, ProductInfo, Recommended } from "@/components";
import { useParams } from "next/navigation";
import weddingProducts from "@/utils/mockData/WeddingData";

// Типизация пропсов для кнопок
interface BtnProps {
  className?: string;
  onClick?: () => void;
}

interface SliderSettings {
  dots: boolean;
  prevArrow: JSX.Element;
  nextArrow: JSX.Element;
  fade: boolean;
  dotsClass: string;
  customPaging: (i: number) => JSX.Element;
  children?: React.ReactNode;
  className?: string;
}

const PreviousBtn: React.FC<BtnProps> = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowBackIos sx={{ color: "#01041e", fontSize: "45px" }} />
  </div>
);

const NextBtn: React.FC<BtnProps> = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowForwardIos sx={{ color: "#01041e", fontSize: "45px" }} />
  </div>
);

const TypedSlider = Slider as unknown as React.ComponentType<SliderSettings>;

const Details: React.FC = () => {
  const params = useParams(); // Получаем все параметры
  const id = params?.id; // id может быть string | string[] | undefined

  // Преобразуем id в число, обрабатывая все случаи
  const productIdRaw = Array.isArray(id) ? id[0] : id; // Берем первый элемент, если массив
  const productId = productIdRaw ? parseInt(productIdRaw, 10) : undefined; // Преобразуем в число или undefined

  // Ищем продукт, только если productId определен
  const currentProduct = productId !== undefined ? weddingProducts.find((item) => item.id === productId) : undefined;

  // Обработка случая, если продукт не найден
  if (productId === undefined || !currentProduct) {
    return <div>Product not found</div>;
  }

  const data = [currentProduct?.image, currentProduct?.image2, currentProduct?.image3].filter(Boolean) as string[]; // Убираем undefined и типизируем как массив строк

  const settings: SliderSettings = {
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    fade: true,
    dotsClass: "slick-dots custom-indicator",
    customPaging: (i: number) => (
      <div>
        <img src={data[i]} alt="" className="details-carousel" />
      </div>
    ),
  };

  return (
    <div className="product">
      <div className="product-container">
        <TypedSlider className="product-slider" {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              {" "}
              {/* Используем индекс как стабильный ключ */}
              <img className="product-slider-img" src={item} alt={currentProduct?.title || ""} />
            </div>
          ))}
        </TypedSlider>

        <div className="product-info">
          <div className="product-info2">
            <Typography sx={{ fontSize: { xs: "20px", sm: "25px" }, color: "#01041e" }} variant="h5">
              {currentProduct?.title || "Product Title"}
            </Typography>
            <div className="product-info2-2">
              <Typography
                sx={{
                  marginTop: "10px",
                  marginRight: "20px",
                  textDecoration: "line-through",
                  color: "gray",
                }}
                variant="h5"
              >
                {currentProduct?.price2 || "N/A"}₽
              </Typography>
              <Typography sx={{ marginTop: "10px" }} variant="h5">
                {currentProduct?.price || "N/A"}₽
              </Typography>
            </div>
            <Typography variant="h6" sx={{ marginTop: "10px", marginBottom: "20px" }}>
              Модернизированный классический костюм, созданный для комфорта и удобства.
            </Typography>
            <ul>
              <li>Большой размерный ряд</li>
              <li>Качественный материал</li>
              <li>Комфортная ходьба</li>
              <li>Хорошо сидит на фигуре</li>
            </ul>
          </div>
          <div className="product-info3">
            <MyAccordion />
            <Typography variant="h6" sx={{ marginTop: "50px" }}>
              {currentProduct?.description_en || "Описание отсутствует"}
            </Typography>
            <Drawer />
          </div>
        </div>
      </div>
      <ProductInfo />
      <Recommended />
    </div>
  );
};

export default Details;
