"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    secondary: {
      main: "#01041e",
      contrastText: "#ffffff",
    },
  },
});

export default theme;
