import React from "react";
// import { useState } from "react";
import "../../collections/Collections.css";

import { CardActionArea, Typography } from "@mui/material";
import Link from "next/link";

const AutumnWinter = () => {
  return (
    <div className="spring-summer">
      <div>
        <div className="sp-sm-txt">
          <Typography variant="h4">Осень - зима</Typography>
          <img src="/assets/underline.jpg" alt="" />
        </div>
        <Typography id="sp-sm-mobile" sx={{ textAlign: "center", padding: "40px" }} variant="h4">
          Осень
        </Typography>
        <div className="sp-sm-container">
          <div className="product-wrapper2 sp-sm-inner">
            <Link href="/collections/autumn-winter/autumn">
              <CardActionArea>
                <img className="product-img2" src="/assets/collections/autumn-category.jpg" alt="" />

                <div className="middle2">
                  <Typography sx={{ cursor: "pointer", fontWeight: "bold", color: "white" }} variant="h3">
                    Осень
                  </Typography>
                </div>
              </CardActionArea>
            </Link>
          </div>
          <Typography id="sp-sm-mobile" sx={{ textAlign: "center", padding: "40px" }} variant="h4">
            Зима
          </Typography>
          <div className="product-wrapper2 sp-sm-inner">
            <Link href="/collections/autumn-winter/winter">
              <CardActionArea>
                <img className="product-img2" src="/assets/collections/winter-category.jpg" alt="" />
                <div className="middle2">
                  <Typography
                    sx={{
                      cursor: "pointer",
                      fontWeight: "bold",
                      color: "white",
                      textTransform: "uppercase",
                    }}
                    variant="h3"
                  >
                    Зима
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

export default AutumnWinter;
