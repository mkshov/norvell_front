import React from "react";
// import { useState } from "react";
import "../../collections/Collections.css";

import { CardActionArea, Typography } from "@mui/material";
import Link from "next/link";

const SpringSummer = () => {
  return (
    <div className="spring-summer">
      <div>
        <div className="sp-sm-txt">
          <Typography sx={{ textTransform: "uppercase" }} variant="h4">
            Весна - лето
          </Typography>
          <img src="/assets/underline.jpg" alt="" />
        </div>
        <Typography id="sp-sm-mobile" sx={{ textAlign: "center", padding: "40px" }} variant="h4">
          Весна
        </Typography>
        <div className="sp-sm-container">
          <div className="product-wrapper2 sp-sm-inner">
            <Link href={"/collections/spring-summer/spring"}>
              <CardActionArea>
                <img className="product-img2" src="/assets/collections/spring-category.jpg" alt="" />

                <div className="middle2">
                  <Typography sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }} variant="h3">
                    Весна
                  </Typography>
                </div>
              </CardActionArea>
            </Link>
          </div>
          <Typography id="sp-sm-mobile" sx={{ textAlign: "center", padding: "40px" }} variant="h4">
            Лето
          </Typography>
          <div className="product-wrapper2 sp-sm-inner">
            <Link href={"/collections/spring-summer/summer"}>
              <CardActionArea>
                <img className="product-img2" src="/assets/collections/summer-category.jpg" alt="" />
                <div className="middle2">
                  <Typography sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }} variant="h3">
                    Лето
                  </Typography>
                </div>
              </CardActionArea>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpringSummer;
