import React from "react";

import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";

const Spring = () => {
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography sx={{ textTransform: "uppercase" }} variant="h4">
          Весна
        </Typography>
        <img className="sp-img" src="/assets/underline.jpg" alt="" />
      </div>
      <div>
        {spring.map((item) => (
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
          <Link href="/collections-spring-summer-2022/summer">
            <Button className="main-button">Лето</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spring;
const spring = [
  {
    image: "/assets/collections/img11.jpg",
    text_it:
      "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca sfoderata con tre bottoni, due tasche applicate e pantaloni scollati con coulisse in vita. Tagliato e cucito esclusivamente a mano da un esclusivo tessuto Daniel Hazard, in 52% lino, 41% lana e 7% seta.",
    text_en:
      "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unlined jacket with three buttons, two patch pockets, and unpleated trousers with a waist drawstring. Cut and sewn exclusively by hand from an exclusive Daniel Hazard textile, in 52% linen, 41% wool, and 7% silk.",
  },
  {
    image: "/assets/collections/img12.jpg",
    text_it:
      "Un'eccezionale giacca sfoderata con tre bottoni e due tasche applicate, basata su un modello esclusivo disegnato e creato da Daniel Hazard. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, in 55% cashmere, 25% seta e 20% lino.",
    text_en:
      "An exceptional, unlined jacket with three buttons and two patch pockets, based on an exclusive model designed and created by Daniel Hazard. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, in 55% cashmere, 25% silk, and 20% linen.",
  },
  {
    image: "/assets/collections/img13.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance, suitable for particularly humid climates: an unlined suit with three buttons and trousers with two pleats, fabric with Prince of Wales pattern, 71% wool, 15% silk, and 14% linen.",
  },
  {
    image: "/assets/collections/img14.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance, suitable for particularly humid climates: an unlined suit with three buttons and trousers with two pleats, fabric with Prince of Wales pattern, 71% wool, 15% silk, and 14% linen.",
  },
  {
    image: "/assets/collections/img15.jpg",
    text_it:
      "Un'eccezionale giacca sfoderata con tre bottoni e due tasche applicate, basata su un modello esclusivo disegnato e creato da Daniel Hazard. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, in 70% cashmere, 17% seta e 13% lino.",
    text_en:
      "An exceptional, unlined jacket with three buttons and two patch pockets, based on an exclusive model designed and created by Daniel Hazard. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, in 70% cashmere, 17% silk, and 13% linen.",
  },
];
