import React from "react";

import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";

import "../../Collections.css";

const Autumn = () => {
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography sx={{ textTransform: "uppercase" }} variant="h4">
          Осень
        </Typography>
        <img className="sp-img" src="/assets/underline.jpg" alt="" />
      </div>
      <div>
        {autumn.map((item) => (
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
          <Link href="/collections/autumn-winter/winter">
            <Button sx={{ textTransform: "uppercase" }} className="main-button">
              Зима
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const autumn = [
  {
    image: "/assets/collections/img1.jpg",
    text_it:
      "Un capolavoro assoluto, essenziale nel guardaroba di ogni conoscitore di eleganza senza tempo: un abito doppiopetto con sei bottoni e due tasche a taglio, e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Daniel Hazard, 93% lana e cashmere S’170.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a double-breasted suit with six buttons and two slash pockets, and trousers with two pleats. Sewn by hand in a very soft, fulled fabric with an exclusive Daniel Hazard design, 93% wool and S’170 cashmere.",
  },
  {
    image: "/assets/collections/img2.jpg",
    text_it:
      "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni conoscitore di un'eleganza senza tempo: un abito a tre bottoni con due tasche a taglio, e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Daniel Hazard, 93% lana e cashmere S’170.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button suit featuring two slash pockets, and trousers with two pleats. Sewn by hand in a very soft, fulled fabric with an exclusive Daniel Hazard design, 93% wool and S’170 cashmere.",
  },
  {
    image: "/assets/collections/img3.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta, interamente destrutturata. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button jacket with two patch pockets and a barchetta pocket, entirely deconstructed. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
  },
  {
    image: "/assets/collections/img4.jpg",
    text_it:
      "Da un modello esclusivo disegnato da Daniel Hazard, una giacca a tre bottoni con tasche per biglietti e patta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "From an exclusive model designed by Daniel Hazard, a three-button jacket with ticket pockets and flaps. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
  },
  {
    image: "/assets/collections/img5.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di un'eleganza senza tempo: un abito a tre bottoni con due tasche e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Daniel Hazard, 93% lana e cashmere S’170.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button suit featuring two pockets, and trousers with two pleats. Sewn by hand in a very soft, fulled fabric with an exclusive Daniel Hazard design, 93% wool and S’170 cashmere.",
  },
  {
    image: "/assets/collections/img6.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a three-button jacket with two patch pockets and a barchetta pocket. Sewn by hand in a 100% knitwear cashmere thread, very soft to the touch, with an exclusive checkered design, perfect for both lined and unlined jackets.",
  },
];

export default Autumn;
