"use client";
import React, { useEffect, useState } from "react";
// import clsx from "clsx";

import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hamburger from "hamburger-react";
import { Collapse } from "@mui/material";

import "./header.css";

import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Header() {
  const router = useRouter();

  const [openSidebar, setOpenSidebar] = useState(false);
  const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);
  // console.log("isOpenShopMenu: ", isOpenShopMenu);

  const toggleSidebar = () => {
    setOpenSidebar((open) => !open);
  };
  const handleCloseSidebar = () => {
    setOpenSidebar(false);
  };

  const handleOpenShopMenu = () => {
    setIsOpenShopMenu(true);
    handleCloseSidebar();
  };

  const handleCloseShopMenu = () => {
    setIsOpenShopMenu(false);
  };

  const [navHeight, setNavHeight] = useState("height-active");
  const [navImage, setNavImage] = useState("image-active");

  const listenScrollEvent = () => {
    window.scrollY > 200 ? setNavHeight("header") : setNavHeight("height-active");
    window.scrollY > 200 ? setNavImage("image") : setNavImage("image-active");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (openSidebar) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [openSidebar]);

  const handleClickNavigate = (path: any) => (e: any) => {
    setIsOpenShopMenu(false);
    router.push(path);
  };

  const handleDraft = () => {
    toggleSidebar();
    handleCloseShopMenu();
  };
  const handleDraft2 = () => {
    router.push("/");
    handleCloseSidebar();
  };

  return (
    <Box sx={{ flexGrow: 1 }} onMouseLeave={handleCloseShopMenu}>
      <AppBar>
        <Toolbar className={navHeight}>
          <Box className="hamburger" onClick={handleDraft}>
            <Hamburger toggled={openSidebar} direction="right" size={30} color="#01041e" />
            <div className="border1"></div>
          </Box>

          <Box className="header-logo">
            <img onClick={handleDraft2} className={navImage} onMouseEnter={handleCloseShopMenu} src="/assets/grand_hill_black.svg" alt="logo" />
          </Box>
          <div className="border3 header-routes"></div>
          <Box className="header-routes holder">
            <Box
              sx={{
                height: "100%",
                width: "40px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <SearchIcon sx={{ fontSize: "30px", color: "#01041e" }} onMouseOver={handleOpenShopMenu} />
            </Box>
          </Box>
        </Toolbar>
        <Collapse className="header-category" in={isOpenShopMenu}>
          <ul>
            <Box className="header-category-box">
              <Typography variant="h6">КОСТЮМЫ</Typography>
              <li onClick={handleClickNavigate("/suits/everyday")}>На каждый день</li>
              <li onClick={handleClickNavigate("/suits/wedding")}>На свадьбу</li>
            </Box>
            <Box className="header-category-box">
              <Typography variant="h6">ОДЕЖДА</Typography>
              <li onClick={handleClickNavigate("/clothing/jackets")}>Пиджаки</li>
              <li onClick={handleClickNavigate("/clothing/trousers")}>Брюки</li>
            </Box>
            <Box className="header-category-box">
              <Typography variant="h6">КОЛЛЕКЦИИ</Typography>
              <li onClick={handleClickNavigate("/collections/spring-summer")}>Весна - лето</li>
              <li onClick={handleClickNavigate("/collections/autumn-winter")}>Осень - зима</li>
            </Box>
            <Box className="header-category-img">
              <img src="/assets/HomePage/men1.jpg" alt="suit-img" />
            </Box>
          </ul>
        </Collapse>
      </AppBar>
      {<Sidebar navHeight={navHeight} open={openSidebar} toggleSidebar={toggleSidebar} />}
    </Box>
  );
}
