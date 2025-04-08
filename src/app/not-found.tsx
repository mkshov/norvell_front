"use client";

import Image from "next/image";
import Link from "next/link";
import { Box, Button, Typography, Grid } from "@mui/material";

export default function NotFound() {
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {/* Левая часть с изображением */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        >
          <Image src="/assets/aboutus/notfound.jpeg" alt="image for not found page" fill style={{ objectFit: "cover" }} />
        </Box>
      </Grid>

      {/* Правая часть с текстом */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#201B18",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Box sx={{ maxWidth: { xs: 300, md: "auto" }, textAlign: { xs: "left", md: "left" } }}>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "0.875rem", md: "1.5rem" },
              color: "#999999",
            }}
          >
            Ошибка 404...
          </Typography>

          <Typography
            variant="h2"
            sx={{
              mt: 3,
              mb: 4,
              fontWeight: "bold",
              fontSize: { xs: "1.75rem", md: "3rem" },
            }}
          >
            Страница не найдена
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "0.875rem", md: "1rem" },
              color: "#E6E6E6",
              maxWidth: 350,
            }}
          >
            Мы повсюду искали эту страницу. Вы уверены, что URL-адрес сайта правильный?
          </Typography>

          <Box mt={5}>
            <Link href="/" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  px: 5,
                  py: 1.5,
                  fontWeight: "bold",
                  letterSpacing: 2,
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                Вернуться на главную
              </Button>
            </Link>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
