"use client";
import React from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "./CardSlider.css"; // Импортируем стили

// Типы для пропсов кнопок
interface BtnProps {
  className?: string;
  onClick?: () => void;
}

const PreviousBtn: React.FC<BtnProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <ArrowBackIos sx={{ color: "#01041e", fontSize: "30px" }} />
    </div>
  );
};

const NextBtn: React.FC<BtnProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={(e) => {
        e.stopPropagation();
        onClick?.();
      }}
    >
      <ArrowForwardIos sx={{ color: "#01041e", fontSize: "30px" }} />
    </div>
  );
};

// Настройки слайдера
const settings: Settings = {
  className: "slider",
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  autoplay: false,
};

// Типы для пропсов нашего слайдера
interface SliderProps {
  children: React.ReactNode;
}

// Безопасное приведение типа через unknown
const TypedSlider = Slider as unknown as React.ComponentType<Settings & SliderProps>;

const CardSlider: React.FC<SliderProps & Settings> = (props) => {
  const { children, ...rest } = props;
  return (
    <TypedSlider {...settings} {...rest}>
      {children}
    </TypedSlider>
  );
};

export default CardSlider;
