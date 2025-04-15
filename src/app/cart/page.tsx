"use client";
import React, { useEffect, useState } from "react";
import { Box, Button, IconButton, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { CartItem, getCart, updateCartItemQuantity, clearCart } from "@/utils/LocalStorage/cartStorage";
import { useRouter } from "next/navigation";
import CheckoutModal from "./components/CheckoutModal";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [openCheckout, setOpenCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCart(getCart());
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      setCart(getCart());
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleChangeQuantity = (id: number, quantity: number) => {
    updateCartItemQuantity(id, quantity);
    setCart(getCart());
  };

  const handleClearCart = () => {
    clearCart();
    setCart([]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 10 }}>
        <Typography variant="h4" color="#01041e">
          Ваша корзина пуста
        </Typography>
        <Button sx={{ mt: 2, fontWeight: "bold" }} className="main-button" onClick={() => router.push("/")}>
          Вернуться к покупкам
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", py: 5, px: { xs: 2, sm: 4 } }}>
      <Typography variant="h4" sx={{ mb: 4, color: "#01041e", fontWeight: "bold" }}>
        Корзина
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
        <Box sx={{ flex: 2 }}>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 3,
                p: 2,
                border: "1px solid #e0e0e0",
                bgcolor: "#fff",
              }}
            >
              <Box sx={{ width: 100, height: 100, position: "relative", mr: 2 }}>
                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover", borderRadius: 4 }} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant="h6" sx={{ color: "#01041e" }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "gray" }}>
                  {item.price.toLocaleString()}₽ / шт.
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mr: 2 }}>
                <IconButton onClick={() => handleChangeQuantity(item.id, item.quantity - 1)}>-</IconButton>
                <Typography>{item.quantity}</Typography>
                <IconButton onClick={() => handleChangeQuantity(item.id, item.quantity + 1)}>+</IconButton>
              </Box>
              <Typography variant="h6" sx={{ color: "#01041e" }}>
                {(item.price * item.quantity).toLocaleString()}₽
              </Typography>
            </Box>
          ))}
          <Button sx={{ mt: 2 }} color="error" onClick={handleClearCart}>
            Очистить корзину
          </Button>
        </Box>

        <Box
          sx={{
            flex: 1,
            p: 3,
            border: "1px solid #e0e0e0",
            bgcolor: "#f9f9f9",
            height: "fit-content",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: "#01041e" }}>
            Итог
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
            <Typography>Товары ({cart.length}):</Typography>
            <Typography>{totalPrice.toLocaleString()}₽</Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography>Доставка:</Typography>
            <Typography>Бесплатно</Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography variant="h6">Общая сумма:</Typography>
            <Typography variant="h6">{totalPrice.toLocaleString()}₽</Typography>
          </Box>
          <Button fullWidth sx={{ fontWeight: "bold" }} className="main-button" onClick={() => setOpenCheckout(true)}>
            Оформить заказ
          </Button>
        </Box>
      </Box>
      <CheckoutModal open={openCheckout} handleClose={() => setOpenCheckout(false)} cart={cart} setCart={setCart} />
    </Box>
  );
};

export default CartPage;
