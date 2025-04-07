"use client";
import React from "react";
import "./Footer.css";

import { Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();
  const handleClickFooterNavigate = (path) => () => {
    router.push(path);
  };
  return (
    // <div className="footer">
    <div className="footer-container">
      <section className="sections">
        <Typography variant="h6">GRAND HILL</Typography>
        <div>
          <Typography onClick={handleClickFooterNavigate("/about-us")} variant="subtitle">
            О нас
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/contacts-us")} variant="subtitle">
            Наши контакты
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
          Наши продукты
        </Typography>
        <div>
          <Typography onClick={handleClickFooterNavigate("/suits/everyday")} variant="subtitle">
            На каждый день
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/suits/wedding")} variant="subtitle">
            На свадьбу
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/clothing/jackets")} variant="subtitle">
            Пиджаки
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/clothing/trousers")} variant="subtitle">
            Брюки
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography variant="h6">КОЛЛЕКЦИИ</Typography>
        <div>
          <Typography onClick={handleClickFooterNavigate("/collections/spring-summer/")} variant="subtitle">
            Весна - лето
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/collections/autumn-winter/")} variant="subtitle">
            Осень - зима
          </Typography>
        </div>
      </section>
      {/* <section className="sections">
        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
          Follow Us
        </Typography>
        <div>
          <Typography variant="subtitle">Facebook</Typography>
          <Typography variant="subtitle">Twitter</Typography>
          <Typography variant="subtitle">Instagram</Typography>
        </div>
      </section> */}
    </div>
    // </div>
  );
};

export default Footer;
