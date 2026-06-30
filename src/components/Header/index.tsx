"use client";
import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Hamburger from "hamburger-react";
import { Collapse, Fab } from "@mui/material";

import "./header.css";

import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import { getCartItemCount } from "@/utils/LocalStorage/cartStorage";

export default function Header() {
	const router = useRouter();

	const [openSidebar, setOpenSidebar] = useState(false);
	const [isOpenShopMenu, setIsOpenShopMenu] = useState(false);
	const [cartItemCount, setCartItemCount] = useState(0);

	// Обновляем количество товаров в корзине
	useEffect(() => {
		setCartItemCount(getCartItemCount());
		const handleCartUpdate = () => {
			setCartItemCount(getCartItemCount());
		};
		window.addEventListener("cartUpdated", handleCartUpdate);
		return () => window.removeEventListener("cartUpdated", handleCartUpdate);
	}, []);

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
	const [navImage, setNavImage] = useState("logo-text-active");

	const listenScrollEvent = () => {
		window.scrollY > 200 ? setNavHeight("header") : setNavHeight("height-active");
		window.scrollY > 200 ? setNavImage("logo-text") : setNavImage("logo-text-active");
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

	const handleClickNavigate = (path: string) => () => {
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
						<Typography
							onClick={handleDraft2}
							className={navImage}
							onMouseEnter={handleCloseShopMenu}
							sx={{ fontFamily: '"Inter", sans-serif', letterSpacing: "0.10em", fontWeight: 100, cursor: "pointer" }}
						>
							Norvell
						</Typography>
					</Box>
					<div className="border3 header-routes"></div>
					<Box className="header-routes holder">
						<Box
							sx={{
								height: "100%",
								display: "flex",
								gap: 2,
								alignItems: "center",
							}}
						>
							<SearchIcon sx={{ fontSize: "30px", color: "#01041e", cursor: "pointer" }} onMouseOver={handleOpenShopMenu} />
						</Box>
					</Box>
					<Box sx={{ margin: "0 20px" }} className="border3 header-routes"></Box>

					<Badge className="cart-in-header" badgeContent={cartItemCount} color="error">
						<LocalMallOutlinedIcon sx={{ fontSize: "30px", color: "#01041e", cursor: "pointer" }} onClick={() => router.push("/cart")} />
					</Badge>
				</Toolbar>
				<Collapse className="header-category" in={isOpenShopMenu}>
					<ul>
						<Box className="header-category-box">
							<Typography variant="h6">КОСТЮМЫ</Typography>
							<li onClick={handleClickNavigate("/suits/suit")}>Костюм</li>
							<li onClick={handleClickNavigate("/suits/suit-trio")}>Костюм-тройка</li>
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
			<Sidebar navHeight={navHeight} open={openSidebar} toggleSidebar={toggleSidebar} />
			<Fab
				className="cart-fab"
				aria-label="add"
				sx={{ position: "fixed", bottom: 20, right: 20, background: "white" }}
				onClick={() => router.push("/cart")}
			>
				<Badge badgeContent={cartItemCount} color="error">
					<LocalMallOutlinedIcon sx={{ fontSize: "30px", color: "#01041e", cursor: "pointer" }} />
				</Badge>
			</Fab>
		</Box>
	);
}
