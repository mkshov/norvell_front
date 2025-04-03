import React from "react";
import "./ProductInfo.css";

import { Typography } from "@mui/material";

const ProductInfo = () => {
  return (
    <div className="info-component">
      <div className="info-component-txt">
        <Typography variant="h3">theModern</Typography>
        <Typography variant="h5">
          theModernChild1 <br />
          theModernChild2
        </Typography>
      </div>

      <div className="info-component-container">
        <div className="info-component-inner">
          <img src="/assets/productinfo/1.png" alt="" />
          <Typography variant="subtitle3">careIcon1</Typography>
          <Typography>careIconChild1</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/2.png" alt="" />
          <Typography variant="subtitle3">careIcon2</Typography>
          <Typography>careIconChild2</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/3.png" alt="" />
          <Typography variant="subtitle3">careIcon3</Typography>
          <Typography>careIconChild3</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/4.png" alt="" />
          <Typography variant="subtitle3">careIcon4</Typography>
          <Typography>careIconChild4</Typography>
        </div>
        <div className="info-component-inner">
          <img src="/assets/productinfo/5.png" alt="" />
          <Typography variant="subtitle3">careIcon5</Typography>
          <Typography>careIconChild5</Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
