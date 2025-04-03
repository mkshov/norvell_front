"use client";
import React, { useEffect } from "react";

import { Box, Button, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import "./HomePage.css";

import { useRouter } from "next/navigation";
import { Slider } from "@/components";

const HomePage = () => {
  const router = useRouter();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    dots: false,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClickNavigate = (path: string) => () => {
    router.push(path);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Box>
      <Box className="sliders">
        <Slider>
          <Box>
            <Box className="slide-1">
              <img alt="Background" src="/assets/HomePage/img1.jpg" />
              <Box className="slide-1-overlay">
                <Box data-aos="fade-center" data-aos-offset="200" data-aos-duration="500" className="slide-1-inner">
                  <Typography variant="h3">Новая коллекция</Typography>
                  <Typography variant="h5">Весна - лето</Typography>
                  <Typography variant="h4">Стилевые рамки</Typography>
                  <Button className="main-button" onClick={handleClickNavigate("/collections-spring-summer-2022")} variant="outlined" color="inherit">
                    Узнать больше
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="slide-2">
              <img alt="Background-2" src="/assets/HomePage/img2.jpg" />
              <Box className="slide-2-overlay">
                <Box className="slide-2-inner">
                  <Typography variant="h3">Новая коллекция</Typography>
                  <Typography variant="h5">Весна - лето</Typography>
                  <Button onClick={handleClickNavigate("/collections-spring-summer-2022")} className="main-button" variant="outlined" color="inherit">
                    Узнать больше
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>

      <Box>
        <Box className="slide-1-inner-adaptive">
          <Box className="slide-1-inner-adaptive-box">
            <Typography variant="h3">Новая коллекция</Typography>
            <Typography variant="h5">Весна - лето</Typography>
            <Typography variant="h4">Стилевые рамки</Typography>
            <Button className="main-button" onClick={handleClickNavigate("/collections-spring-summer-2022")} variant="outlined" color="inherit">
              Узнать больше
            </Button>
          </Box>
        </Box>
        <Box className="txt-block1">
          <Box className="txt-block-inner">
            <Typography variant="h4">НАЙДИТЕ СВОЙ ИДЕАЛЬНЫЙ ОБРАЗ</Typography>
            <Typography variant="h6">
              Вот уже более 40 лет мы одеваем наших клиентов в повседневные и свадебные костюмы, созданные для того, чтобы их можно было отличить.
              Посетите наш широкий выбор изысканных мужских костюмов и выглядите лучше всех на каждом
            </Typography>
          </Box>
        </Box>
        <Box className="img-wrapper-container">
          <Box className="img-wrapper">
            <img className="inner-img" src="/assets/HomePage/inner-img_1.jpg" alt="inner-img" />
            <div className="middle" onClick={handleClickNavigate("/suits/everyday")}>
              <Button className="main-button">Узнать больше</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img className="inner-img" src="/assets/HomePage/inner-img_2.jpg" alt="inner-img" />
            <div className="middle" onClick={handleClickNavigate("/suits/everyday/256324324572")}>
              <Button className="main-button">Узнать больше</Button>
            </div>
          </Box>
          <Box className="img-wrapper">
            <img className="inner-img" src="/assets/HomePage/inner-img_3.jpg" alt="inner-img" />
            <div className="middle" onClick={handleClickNavigate("/suits/everyday")}>
              <Button className="main-button">Узнать больше</Button>
            </div>
          </Box>
        </Box>

        {/* ------------------------------- */}

        <Box className="img-txt-block1">
          <Box className="img-txt-mobile">
            <Typography variant="h4">Превосходное качество</Typography>
          </Box>
          <Box className="img-txt-inner visable">
            <Typography variant="h4">Превосходное качество</Typography>
            <Typography>
              Фабрика классических мужских костюмов выпускает коллекции несколько раз в год. Мы предлагаем широкий ассортимент моделей. Если вы ищете
              надежных поставщиков мужской одежды, мы будем рады обсудить условия сотрудничества.
            </Typography>
            <Typography>
              Наше производство мужской одежды обладает всеми современными технологиями для пошива высококачественных мужских костюмов. Все изделия
              имеют отличный состав ткани и представлены только в актуальных оттенках.
            </Typography>
          </Box>

          <Box>
            <img src="/assets/HomePage/img3.jpg" alt="" />
          </Box>
          <Box className="img-txt-mobile">
            <Typography>
              {" "}
              Фабрика классических мужских костюмов выпускает коллекции несколько раз в год. Мы предлагаем широкий ассортимент моделей. Если вы ищете
              надежных поставщиков мужской одежды, мы будем рады обсудить условия сотрудничества.
            </Typography>
            <Typography>
              Наше производство мужской одежды обладает всеми современными технологиями для пошива высококачественных мужских костюмов. Все изделия
              имеют отличный состав ткани и представлены только в актуальных оттенках.
            </Typography>
          </Box>
        </Box>

        <Box className="img-txt-block1">
          <Box>
            <img src="/assets/HomePage/img4.jpg" alt="" />
          </Box>
          <Box className="img-txt-inner">
            <Typography variant="h4">Новые модели</Typography>
            <Typography>
              Мы, как производители мужских классических костюмов, заинтересованы в том, чтобы в вашем магазине были представлены только самые
              современные модели.
            </Typography>
            <Typography>
              В производстве мы используем самые современные технологии и машины, что позволяет нам быть конкурентоспособными на рынке. Мы
              зарекомендовали себя как надежный поставщик высококачественной продукции.
            </Typography>
          </Box>
        </Box>
        <div>
          <Slider {...settings}>
            <div className="slide-padding">
              <img width="100%" src="/assets/HomePage/carousel-img_1.jpg" alt="" />
            </div>
            <div className="slide-padding">
              <img width="100%" src="/assets/HomePage/carousel-img_2.jpg" alt="" />
            </div>
            <div className="slide-padding">
              <img width="100%" src="/assets/HomePage/carousel-img_3.jpg" alt="" />
            </div>
            <div className="slide-padding">
              <img width="100%" src="/assets/HomePage/carousel-img_4.jpg" alt="" />
            </div>

            <div className="slide-padding">
              <img width="100%" src="/assets/HomePage/carousel-img_5.jpg" alt="" />
            </div>
          </Slider>
        </div>

        {/* ----------------------------------- */}

        {/* History us start */}
        <Box className="history-block">
          <Box className="history-block-box1">
            <Box className="history-text1">
              <Box data-aos="fade-right" className="history-text1-inner">
                <Typography variant="h4">ИСТОРИЯ БРЕНДА</Typography>
                <Typography variant="h6">
                  Можете ли вы представить, что старая швейная машинка может творить чудеса? Так вот, вы должны в это поверить! При таких
                  обстоятельствах родился Grand Hill. Время шло, фабрика начала постепенно расширяться. Производственные мощности были оснащены
                  современным и высокотехнологичным оборудованием, позволяющим улучшать качество продукции, поддерживать высокую конкурентоспособность
                  и создавать модели, отвечающие последним модным тенденциям.
                </Typography>
              </Box>
            </Box>
            <Box className="history-img">
              <Box data-aos="fade-left" data-aos-offset="200" data-aos-duration="500" className="history-img-title">
                <Typography variant="h3">Наша история</Typography>
              </Box>
              <Box data-aos="fade-left" data-aos-offset="200" data-aos-duration="500">
                <img src="/assets/HomePage/heritage.jpg" alt="" />
              </Box>
            </Box>
          </Box>
          <Box className="history-text2">
            <Box data-aos="fade-right" data-aos-offset="200" data-aos-duration="500" className="history-text2-container">
              <Box className="history-text2-inner" data-aos="fade-right" data-aos-offset="200" data-aos-duration="500">
                <Typography variant="h4">Grand Hill</Typography>
                <Typography variant="h6">
                  Он начал свой путь еще в 1979 году. Grand Hill стремится вывести на рынок мужской одежды высококачественную продукцию, чтобы люди,
                  надевающие костюм или пальто, чувствовали себя уверенно и комфортно.
                </Typography>
                <Button
                  onClick={handleClickNavigate("about-us")}
                  sx={{ border: "2px solid white !important", color: "white !important" }}
                  className="main-button"
                >
                  Узнать больше
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* History us end */}
        <Box className="txt-block2">
          <Box className="txt-block-inner">
            <Typography variant="h3">Наши достижения</Typography>
            <Typography variant="h6">Отзывы</Typography>
          </Box>
        </Box>
        {/* <Box className="img-block">
          <Box className="img-block-inner">
            <Typography variant="subtitle2">
              Free shipping, Discount applied in cart
            </Typography>
            <Button className="button-white">hover me!</Button>
          </Box>
        </Box> */}

        {/* info us start */}
        <Box className="info-us">
          <Box data-aos="fade-left" data-aos-offset="200" data-aos-duration="500" className="info-us-blocks">
            <img className="info-usImg1" src="/assets/HomePage/img5.jpg" alt="" />
            <Box>
              <Typography className="h4-txt1" variant="h4">
                БОЛЕЕ 5.000 КОСТЮМОВ В НАЛИЧИИ
              </Typography>
            </Box>
          </Box>
          <Box data-aos="zoom-in" data-aos-offset="200" data-aos-duration="500" className="info-us-blocks">
            <img className="info-usImg1" src="/assets/HomePage/img6.svg" alt="" />
            <Box>
              <Typography sx={{ color: "#01041e", fontWeight: "300", fontSize: "30px" }} variant="h4">
                5-ЗВЕЗДОЧНЫЙ РЕЙТИНГ GOOGLE
              </Typography>
            </Box>
          </Box>
          <Box data-aos="fade-right" data-aos-offset="200" data-aos-duration="500" className="info-us-blocks">
            <img className="info-usImg1" src="/assets/HomePage/img7.jpg" alt="" />
            <Box>
              <Typography sx={{ color: "#01041e", fontWeight: "300", fontSize: "30px" }} variant="h4">
                БОЛЕЕ 40 ЛЕТ В БИЗНЕСЕ
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* Info us end */}
      </Box>
    </Box>
  );
};

export default HomePage;
