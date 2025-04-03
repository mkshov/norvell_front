import React from "react";

import { Box, Typography } from "@mui/material";

import "./AboutUs.css";

// import banner1 from "../../assets/images/banner.jpg";

const AbotUs = () => {
  return (
    <div>
      <section>
        <div className="about-us-header">
          <Typography variant="h4">aboutUs0</Typography>
          <img src="/assets/underline.jpg" alt="" />
        </div>

        <Box className="img-txt-block2">
          <Box className="img-txt-mobile2">
            <Typography variant="h4">Daniel Hazard</Typography>
          </Box>
          <Box className="img-txt-inner2 visable2">
            <Typography variant="h4">Daniel Hazard</Typography>
            <Typography>ourStoryChild2</Typography>
            <Typography>aboutUs1</Typography>
          </Box>

          <Box>
            <img src="/assets/aboutus/1.jpg" alt="" />
          </Box>
          <Box className="img-txt-mobile2">
            <Typography>ourStoryChild2</Typography>
            <Typography>aboutUs1</Typography>
          </Box>
        </Box>

        <Box className="img-txt-block2">
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src="/assets/aboutus/2.jpg" alt="" />
          </Box>
          <Box className="img-txt-inner2">
            <Typography variant="h4">excellentQuality</Typography>
            <Typography>aboutUs2</Typography>
            <Typography>aboutUs3</Typography>
          </Box>
        </Box>
      </section>
      <section className="section-2">
        <div>
          <Typography sx={{ textAlign: "center" }} variant="h3">
            aboutUs4
          </Typography>
          <Typography sx={{ textAlign: "center" }} variant="h6">
            aboutUs5
          </Typography>
        </div>
        <div className="section-2-container">
          <div className="section-2-blocks">
            <img src="/assets/aboutus/3.jpg" alt="suits" />
            <div className="section-2-inner1">
              <Typography variant="h4">01 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">aboutUs6</Typography>
              </div>
            </div>
          </div>
          <div className="section-2-blocks">
            <img src="/assets/aboutus/4.jpg" alt="suits" />
            <div className="section-2-inner1">
              <Typography variant="h4">02 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">aboutUs7</Typography>
              </div>
            </div>
          </div>
          <div className="section-2-blocks">
            <img src="/assets/aboutus/5.jpg" alt="suits" />
            <div className="section-2-inner1">
              <Typography variant="h4">03 /</Typography>
              <div className="section-2-inner2">
                <Typography variant="h6">aboutUs8</Typography>
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
