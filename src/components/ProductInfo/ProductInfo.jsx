import React from "react";
import "./ProductInfo.css";

import { Typography } from "@mui/material";

const ProductInfo = () => {
  return (
    <div className="info-component">
      <div className="info-component-txt">
        <Typography variant="h3">Костюм для современного мужчины</Typography>
        <Typography variant="h5">
          Grand Hill - бренд, созданный специально для активных людей. Костюм идеально сидит на фигуре <br />и не сковывает движений, что позволяет
          чувствовать себя уверенно в течение всего дня.
        </Typography>
      </div>

      <div className="info-component-container">
        <div className="info-component-inner">
          <img src="/assets/productinfo/1.png" alt="" />
          <Typography variant="subtitle3">НЕ</Typography>
          <Typography>СТИРАТЬ</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/2.png" alt="" />
          <Typography variant="subtitle3">НЕ</Typography>
          <Typography>ОТБЕЛИВАТЬ</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/3.png" alt="" />
          <Typography variant="subtitle3">НЕ СУШИТЬ</Typography>
          <Typography>В МАШИНКЕ</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/4.png" alt="" />
          <Typography variant="subtitle3">ГЛАДИТЬ ПРИ</Typography>
          <Typography>НИЗКОЙ ТЕМПЕРАТУРЕ</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/5.png" alt="" />
          <Typography variant="subtitle3">БЕРЕЖНАЯ</Typography>
          <Typography>ОЧИСТКА С PCE</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
