"use client";
import React from "react";
import Slider from "react-slick";
import { Settings } from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

// Типы для пропсов кнопок
interface BtnProps {
  className?: string;
  onClick?: () => void;
}

const PreviousBtn: React.FC<BtnProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos sx={{ color: "#01041e", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn: React.FC<BtnProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos sx={{ color: "#01041e", fontSize: "45px" }} />
    </div>
  );
};

// Настройки слайдера
const settings: Settings = {
  className: "slider",
  dots: true,
  arrows: false,
  infinite: true,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  speed: 500,
  slidesToShow: 1,
  autoplay: false,
  autoplaySpeed: 7000,
};

// Типы для пропсов нашего слайдера
interface SliderProps {
  children: React.ReactNode;
}

// Безопасное приведение типа через unknown
const TypedSlider = Slider as unknown as React.ComponentType<Settings & SliderProps>;

const CustomSlider: React.FC<SliderProps & Settings> = (props) => {
  const { children, ...rest } = props;
  return (
    <TypedSlider {...settings} {...rest}>
      {children}
    </TypedSlider>
  );
};

export default CustomSlider;
