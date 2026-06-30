import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";

import { Toaster } from "sonner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer, Header } from "@/components";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Norvell - Стильные мужские костюмы",
	description:
		"Ищете идеальный мужской костюм? Бренд Norvell предлагает стильные костюмы премиального качества. Идеальная посадка, качественные ткани, безупрочный крой — для деловых встреч, торжеств и повседневного стиля. Norvell — когда важна каждая деталь.",
	icons: {
		icon: "/favicon.png",
		shortcut: "/favicon.png",
		apple: "/favicon.png",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Toaster richColors />
				<ThemeProvider theme={theme}>
					<AppRouterCacheProvider>
						<CssBaseline />
						<Header />
						<Box sx={{ marginTop: "80px" }}>{children}</Box>
						<Footer />
					</AppRouterCacheProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
