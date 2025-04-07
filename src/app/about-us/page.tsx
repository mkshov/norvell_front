import React from "react";

import { Box, Typography } from "@mui/material";

import "./AboutUs.css";

// import banner1 from "../../assets/images/banner.jpg";

const AbotUs = () => {
  return (
    <div>
      <section>
        <div className="about-us-header">
          <Typography variant="h4">О нашей компании</Typography>
          <img src="/assets/underline.jpg" alt="" />
        </div>

        <Box className="img-txt-block2">
          <Box className="img-txt-mobile2">
            <Typography variant="h4">Grand Hill</Typography>
          </Box>
          <Box className="img-txt-inner2 visable2">
            <Typography variant="h4">Grand Hill</Typography>
            <Typography>
              Он начал свой путь еще в 1979 году. Grand Hill стремится вывести на рынок мужской одежды высококачественную продукцию, а люди, которые
              носят костюм или пальто, чувствуют себя уверенно и комфортно.
            </Typography>
            <Typography>
              В производстве мы используем самые современные технологии. Весь процесс производства находится под постоянным контролем профессионалов.
            </Typography>
          </Box>

          <Box>
            <img src="/assets/aboutus/1.jpg" alt="" />
          </Box>
          <Box className="img-txt-mobile2">
            <Typography>
              Он начал свой путь еще в 1979 году. Grand Hill стремится вывести на рынок мужской одежды высококачественную продукцию, чтобы люди,
              надевающие костюм или пальто, чувствовали себя уверенно и комфортно.
            </Typography>
            <Typography>
              В производстве мы используем самые современные технологии. Весь процесс производства находится под постоянным контролем профессионалов.
            </Typography>
          </Box>
        </Box>

        <Box className="img-txt-block2">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="/assets/aboutus/2.jpg" alt="" />
          </Box>
          <Box className="img-txt-inner2">
            <Typography variant="h4">Отличное качество</Typography>
            <Typography>
              Фабрика классических мужских костюмов выпускает коллекции несколько раз в год. Мы предлагаем большой выбор моделей. Если вы ищете
              надежных поставщиков мужской одежды, мы будем рады обсудить условия сотрудничества.
            </Typography>
            <Typography>
              Наше производство мужской одежды обладает всеми современными технологиями для пошива качественных мужских костюмов. Все изделия имеют
              отличный состав ткани и представлены только в актуальных оттенках.
            </Typography>
          </Box>
        </Box>
      </section>
      <section className="section-2">
        <div>
          <Typography sx={{ textAlign: "center" }} variant="h3">
            Наша компания
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            тщательно следит за качеством своей продукции
          </Typography>
        </div>
        <div className="section-2-container">
          <div className="section-2-blocks">
            <img src="/assets/aboutus/3.jpg" alt="suits" />
            <div className="section-2-inner1">
              <Typography variant="h4">01 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">Для наших изделий мы тщательно отбираем ткани и швейную фурнитуру в Италии, Турции и Китае.</Typography>
              </div>
            </div>
          </div>
          <div className="section-2-blocks">
            <img src="/assets/aboutus/4.jpg" alt="suits" />
            <div className="section-2-inner1">
              <Typography variant="h4">02 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">Мы используем самые современные технологии в нашем производстве</Typography>
              </div>
            </div>
          </div>
          <div className="section-2-blocks">
            <img src="/assets/aboutus/5.jpg" alt="suits" />
            <div className="section-2-inner1">
              <Typography variant="h4">03 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">Опытные контролеры следят за качеством нашей продукции</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default AbotUs;
