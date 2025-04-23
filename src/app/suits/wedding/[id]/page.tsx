"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Modal, Typography, IconButton, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer, MyAccordion, ProductInfo, Recommended } from "@/components";
import { useParams } from "next/navigation";
import weedingSuits from "@/utils/mockData/WeddingData";
import { addToCart, getCart, updateCartItemQuantity } from "@/utils/LocalStorage/cartStorage";

interface BtnProps {
  className?: string;
  onClick?: () => void;
}

interface SliderSettings {
  dots: boolean;
  prevArrow: JSX.Element;
  nextArrow: JSX.Element;
  fade: boolean;
  dotsClass: string;
  customPaging: (i: number) => JSX.Element;
  children?: React.ReactNode;
  className?: string;
}

const PreviousBtn: React.FC<BtnProps> = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowBackIos sx={{ color: "#01041e", fontSize: "45px" }} />
  </div>
);

const NextBtn: React.FC<BtnProps> = ({ className, onClick }) => (
  <div className={className} onClick={onClick}>
    <ArrowForwardIos sx={{ color: "#01041e", fontSize: "45px" }} />
  </div>
);

const TypedSlider = Slider as unknown as React.ComponentType<SliderSettings>;

const Details: React.FC = () => {
  const params = useParams();
  const id = params?.id;
  const productIdRaw = Array.isArray(id) ? id[0] : id;
  const productId = productIdRaw ? parseInt(productIdRaw, 10) : undefined;

  const currentProduct = productId !== undefined ? weedingSuits.find((item) => item.id === productId) : undefined;

  // Состояние для количества товара в корзине
  const [quantity, setQuantity] = useState(0);
  // Состояние для модального окна и увеличенного изображения
  const [openModal, setOpenModal] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  // Проверяем, есть ли товар в корзине при загрузке
  useEffect(() => {
    if (productId !== undefined) {
      const cart = getCart();
      const cartItem = cart.find((item) => item.id === productId);
      setQuantity(cartItem ? cartItem.quantity : 0);
    }
  }, [productId]);

  if (productId === undefined || !currentProduct) {
    return <div>Product not found</div>;
  }

  const data = [currentProduct?.image, currentProduct?.image2, currentProduct?.image3].filter(Boolean) as string[];

  const settings: SliderSettings = {
    dots: true,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    fade: true,
    dotsClass: "slick-dots custom-indicator",
    customPaging: (i: number) => (
      <div>
        <img src={data[i]} alt="" className="details-carousel" />
      </div>
    ),
  };

  // Функция добавления в корзину
  const handleAddToCart = () => {
    addToCart({
      id: currentProduct.id,
      title: currentProduct.title,
      price: currentProduct.price,
      image: currentProduct.image,
      quantity: 1,
    });
    setQuantity(1);
  };

  // Функция изменения количества
  const handleChangeQuantity = (newQuantity: number) => {
    updateCartItemQuantity(currentProduct.id, newQuantity);
    setQuantity(newQuantity);
  };

  // Функция открытия модального окна с увеличенным изображением
  const handleImageClick = (image: string) => {
    setZoomedImage(image);
    setOpenModal(true);
  };

  // Функция закрытия модального окна
  const handleCloseModal = () => {
    setOpenModal(false);
    setZoomedImage(null);
  };

  return (
    <div className="mt-100">
      <div className="product-container">
        <TypedSlider className="product-slider" {...settings}>
          {data.map((item, index) => (
            <div key={index}>
              <img
                className="product-slider-img"
                src={item}
                alt={currentProduct?.title || ""}
                onClick={() => handleImageClick(item)}
                style={{ cursor: "zoom-in", position: "relative", zIndex: index === 0 ? 5 : index === 1 ? 6 : 7 }}
              />
            </div>
          ))}
        </TypedSlider>

        <Modal
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="zoomed-image-modal"
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <ModalInner sx={{ boxShadow: 24, p: 2 }}>
            <IconButton
              onClick={handleCloseModal}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                color: "white",
                bgcolor: "rgba(0, 0, 0, 0.5)",
                "&:hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
              }}
            >
              <CloseIcon />
            </IconButton>
            {zoomedImage && <ZoomedImage src={zoomedImage} alt="Zoomed product" />}
          </ModalInner>
        </Modal>

        <div className="product-info">
          <div className="product-info2">
            <Typography sx={{ fontSize: { xs: "20px", sm: "25px" }, color: "#01041e" }} variant="h5">
              {currentProduct?.title || "Product Title"}
            </Typography>
            <div className="product-info2-2">
              <Typography
                sx={{
                  marginTop: "10px",
                  marginRight: "20px",
                  textDecoration: "line-through",
                  color: "gray",
                }}
                variant="h5"
              >
                {currentProduct?.price2 || "N/A"}₽
              </Typography>
              <Typography sx={{ marginTop: "10px" }} variant="h5">
                {currentProduct?.price || "N/A"}₽
              </Typography>
            </div>
            <Typography variant="h6" sx={{ marginTop: "10px", marginBottom: "20px" }}>
              Модернизированный классический костюм, созданный для комфорта и удобства.
            </Typography>
            <ul>
              <li>Большой размерный ряд</li>
              <li>Качественный материал</li>
              <li>Комфортная ходьба</li>
              <li>Хорошо сидит на фигуре</li>
            </ul>
          </div>
          <div className="product-info3">
            <MyAccordion />
            <Typography variant="h6" sx={{ marginTop: "50px" }}>
              {currentProduct?.description_en || "Описание отсутствует"}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: "20px", justifyContent: { xs: "center", md: "flex-start" } }}>
              {quantity === 0 ? (
                <Button sx={{ fontWeight: "bold" }} className="main-button" onClick={handleAddToCart}>
                  В корзину
                </Button>
              ) : (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Button sx={{ fontWeight: "bold", minWidth: "35px" }} className="main-button" onClick={() => handleChangeQuantity(quantity - 1)}>
                    -
                  </Button>
                  <Typography>{quantity}</Typography>
                  <Button sx={{ fontWeight: "bold", minWidth: "35px" }} className="main-button" onClick={() => handleChangeQuantity(quantity + 1)}>
                    +
                  </Button>
                </Box>
              )}
              <Drawer />
            </Box>
          </div>
        </div>
      </div>
      <ProductInfo />
      <Recommended />
    </div>
  );
};

export default Details;

const ZoomedImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "90vh",
  objectFit: "contain",
  "@media (max-width: 800px)": {
    maxHeight: "none",
    height: "100%",
    width: "auto",
    objectFit: "cover",
  },
});

const ModalInner = styled(Box)({
  position: "relative",
  maxWidth: "95vw",
  maxHeight: "95vh",
  backgroundColor: "transparent",
  "@media (max-width: 800px)": {
    height: "85vh",
    width: "100%",
  },
});
