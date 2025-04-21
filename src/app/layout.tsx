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
  title: "Grand Hill - Стильные мужские костюмы",
  description:
    "Ищете идеальный мужской костюм? Бренд Grand Hill предлагает стильные костюмы премиального качества. Идеальная посадка, качественные ткани, безупрочный крой — для деловых встреч, торжеств и повседневного стиля. Grand Hill — когда важна каждая деталь.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
