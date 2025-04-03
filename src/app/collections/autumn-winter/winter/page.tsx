import React from "react";

import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";

const Winter = () => {
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography sx={{ textTransform: "uppercase" }} variant="h4">
          Зима
        </Typography>
        <img className="sp-img" src="/assets/underline.jpg" alt="" />
      </div>
      <div>
        {winter.map((item) => (
          <Box key={item.image} sx={{ textAlign: "center" }}>
            <img className="img100" src={item.image} alt="" />
            <div>
              <Typography variant="h6" sx={{ padding: "50px" }}>
                {item.text_en}
              </Typography>
            </div>
          </Box>
        ))}
        <div className="d-flex-j-content-c">
          <Link href="/collections/autumn-winter/autumn">
            <Button sx={{ textTransform: "uppercase" }} className="main-button">
              Осень
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Winter;

const winter = [
  {
    image: "/assets/collections/img7.jpg",
    text_it:
      "Un cappotto esclusivo, tre bottoni, due tasche applicate con patta e martingala posteriore. Cucito a mano in un esclusivo quattro fili 100% cashmere. Un filo di maglieria di alta qualità, morbido e leggero.",
    text_en:
      "An exclusive coat, three buttons, two patch pockets with flaps, and rear martingale. Sewn by hand in an exclusive four-thread 100% cashmere. A high quality, soft, and lightweight knitwear thread.",
  },
  {
    image: "/assets/collections/img8.jpg",
    text_it:
      "Un esclusivo cappotto a quattro bottoni con tasche, interamente sfoderato, cucito a mano con doppio trattamento waterproof. 100% cashmere, esclusivo tessuto per maglieria super soft, adatto per capi interamente sfoderati.",
    text_en:
      "An exclusive four-button coat with pockets, entirely unlined, sewn by hand with a double waterproof treatment. 100% cashmere, exclusive super soft knitwear fabric, suitable for entirely unlined garments.",
  },
  {
    image: "/assets/collections/img9.jpg",
    text_it:
      "Un esclusivo overshirt con quattro tasche applicate e alette Safari. Caratterizzato da un tessuto accoppiato in cotone e cashmere. Cucita interamente a mano ed estremamente morbida al tatto.",
    text_en:
      "An exclusive overshirt with four patch pockets and Safari flaps. Featuring a coupled fabric in cotton and cashmere. Sewn entirely by hand and extremely soft to the touch.",
  },
  {
    image: "/assets/collections/img10.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button jacket with two patch pockets and a barchetta pocket. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
  },
];
