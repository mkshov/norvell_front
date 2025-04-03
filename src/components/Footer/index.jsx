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
        <Typography variant="h6">DANIEL HAZARD</Typography>
        <div>
          <Typography onClick={handleClickFooterNavigate("/about-us")} variant="subtitle">
            About Us
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/contacts-us")} variant="subtitle">
            Contacts Us
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
          Our Products
        </Typography>
        <div>
          <Typography onClick={handleClickFooterNavigate("/suits/everyday")} variant="subtitle">
            Everyday
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/suits/wedding")} variant="subtitle">
            Wedding
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/clothing/jackets")} variant="subtitle">
            Jackets
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/clothing/trousers")} variant="subtitle">
            Trousers
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography variant="h6">COLLECTIONS</Typography>
        <div>
          <Typography onClick={handleClickFooterNavigate("/collections-spring-summer-2022")} variant="subtitle">
            Spring - Summer/2022
          </Typography>
          <Typography onClick={handleClickFooterNavigate("/collections-autumn-winter-2022-23")} variant="subtitle">
            Autumn Winter 2022/23
          </Typography>
        </div>
      </section>
      <section className="sections">
        <Typography sx={{ textTransform: "uppercase" }} variant="h6">
          Follow Us
        </Typography>
        <div>
          <Typography variant="subtitle">Facebook</Typography>
          <Typography variant="subtitle">Twitter</Typography>
          <Typography variant="subtitle">Instagram</Typography>
        </div>
      </section>
    </div>
    // </div>
  );
};

export default Footer;
