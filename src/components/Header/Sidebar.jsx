"use client";
import React, { useState } from "react";
// import clsx from "clsx";

import "./Header.css";

import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { List, ListItemButton, styled } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MyListItem = styled(ListItemButton)`
  padding: 0.7rem 2rem;
  border-bottom: solid rgba(40, 40, 40, 0.1) 1px;
  span {
    font-weight: bold;
  }
  &:hover {
    background-color: #01041e;
  }
`;
const MyListItemCollapse = styled(ListItemButton)`
  background-color: #8080801c;
  border-bottom: solid rgba(40, 40, 40, 0.1) 1px;
  &:hover {
    background-color: #01041e;
  }
`;
const MyListItemText = styled(ListItemText)`
  padding-left: 30px;
`;

const Sidebar = (props) => {
  const router = useRouter();
  const { open, toggleSidebar, navHeight } = props;
  const [openList1, setOpenList1] = useState(false);
  const [openList2, setOpenList2] = useState(false);
  const [openList3, setOpenList3] = useState(false);

  const handleClick = () => {
    setOpenList1(!openList1);
  };
  const handleClick2 = () => {
    setOpenList2(!openList2);
  };
  const handleClick3 = () => {
    setOpenList3(!openList3);
  };
  const handleClickNavigate = (path) => () => {
    toggleSidebar();
    router.push(path);
  };

  return (
    <>
      <div>
        <div className={open ? "sidebar sidebar--open" : "sidebar"}>
          <div className={navHeight === "header" ? "navHeight" : "sidebar-container"}>
            <List sx={{ padding: 0 }}>
              <MyListItem
                sx={{
                  padding: "0.7rem 2rem",
                  borderBottom: "solid rgba(40, 40, 40, 0.1) 1px",
                }}
                onClick={handleClick2}
              >
                <ListItemText primary={"Одежда"} />
                {openList2 ? <ExpandLess /> : <ExpandMore />}
              </MyListItem>
              <Collapse in={openList2} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <MyListItemCollapse onClick={handleClickNavigate("/clothing/jackets")}>
                    <MyListItemText primary={"Пиджаки"} />
                  </MyListItemCollapse>
                </List>
                <List component="div" disablePadding>
                  <MyListItemCollapse onClick={handleClickNavigate("/clothing/trousers")}>
                    <MyListItemText primary={"Брюки"} />
                  </MyListItemCollapse>
                </List>
              </Collapse>
              <MyListItem onClick={handleClick3}>
                <ListItemText primary={"Коллекции"} />
                {openList3 ? <ExpandLess /> : <ExpandMore />}
              </MyListItem>
              <Collapse in={openList3} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <MyListItemCollapse onClick={handleClickNavigate("/collections/spring-summer")}>
                    <MyListItemText primary={"Весна - лето"} />
                  </MyListItemCollapse>
                </List>
                <List component="div" disablePadding>
                  <MyListItemCollapse onClick={handleClickNavigate("/collections/autumn-winter")}>
                    <MyListItemText primary={"Осень - зима"} />
                  </MyListItemCollapse>
                </List>
              </Collapse>

              <MyListItem onClick={handleClick}>
                <ListItemText primary={"Костюмы"} />
                {/* <Typography variant="h5">CATEGORY</Typography> */}
                {openList1 ? <ExpandLess /> : <ExpandMore />}
              </MyListItem>
              <Collapse in={openList1} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <MyListItemCollapse onClick={handleClickNavigate("/suits/everyday")}>
                    <MyListItemText primary={"На каждый день"} />
                  </MyListItemCollapse>
                </List>
                <List component="div" disablePadding>
                  <MyListItemCollapse onClick={handleClickNavigate("/suits/wedding")}>
                    <MyListItemText primary={"На свадьбу"} />
                  </MyListItemCollapse>
                </List>
              </Collapse>
              <MyListItem onClick={handleClickNavigate("/about-us")}>
                <ListItemText primary={"О нас"} />
              </MyListItem>
              <MyListItem onClick={handleClickNavigate("/contacts-us")}>
                <ListItemText primary={"Наши контакты"} />
              </MyListItem>
            </List>
          </div>
        </div>
        <div className={open ? "backdrop backdrop--open" : "backdrop"} onClick={toggleSidebar}></div>
      </div>
    </>
  );
};

export default Sidebar;
