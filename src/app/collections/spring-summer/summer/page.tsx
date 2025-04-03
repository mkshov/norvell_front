import React from "react";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const Summer = () => {
  return (
    <div>
      <div className="sp-sm-txt2">
        <Typography variant="h4">Лето</Typography>
        <img className="sp-img" src="/assets/underline.jpg" alt="" />
      </div>
      <div>
        {summer.map((item) => (
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
          <Link href="/collections-spring-summer/spring">
            <Button className="main-button">Весна</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Summer;
const summer = [
  {
    image: "/assets/collections/img16.jpg",
    text_it:
      "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca sfoderata con tre bottoni, due tasche applicate e pantaloni scollati con coulisse in vita. Tagliato e cucito esclusivamente a mano da un esclusivo tessuto Daniel Hazard, in 52% lino, 41% lana e 7% seta.",
    text_en:
      "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unlined jacket with three buttons, two patch pockets, and unpleated trousers with a waist drawstring. Cut and sewn exclusively by hand from an exclusive Daniel Hazard textile, in 52% linen, 41% wool, and 7% silk.",
  },
  {
    image: "/assets/collections/img17.jpg",
    text_it:
      "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca destrutturata con tre bottoni, due tasche applicate e pantaloni con due pieghe e coulisse in vita. Tagliato e cucito esclusivamente a mano da un tessuto con un esclusivo motivo a scacchi Daniel Hazard, in 100% lino.",
    text_en:
      "A new masterpiece, essential in the wardrobe of any contemporary connoisseur of timeless elegance: a suit characterised by an unstructured jacket with three buttons, two patch pockets, and trousers with two pleats and a waist drawstring. Cut and sewn exclusively by hand from a textile with an exclusive Daniel Hazard checkered pattern, in 100% linen.",
  },
  {
    image: "/assets/collections/img18.jpg",
    text_it:
      "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni conoscitore di eleganza senza tempo: una dinner jacket nera con rever a picco con un bottone e pantaloni con due pieghe, tagliati e cuciti interamente a mano in lana S’170.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: a black, peak-lapel dinner jacket with one button and trousers with two pleats, cut and sewn entirely by hand in S’170 wool.",
  },
  {
    image: "/assets/collections/img19.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance, suitable for particularly humid climates: an unlined suit with three buttons and trousers with two pleats, fabric with Prince of Wales pattern, 71% wool, 15% silk, and 14% linen.",
  },
  {
    image: "/assets/collections/img20.jpg",
    text_it:
      "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni intenditore di eleganza senza tempo: abito semi-foderato doppiopetto, tre bottoni, due tasche applicate e pantalone con due pinces. Tessuto esclusivo, molto leggero, estivo e confortevole con una raffinata miscela di fibre di lino e lana.",
    text_en:
      "An absolute masterpiece, essential in the wardrobe of any connoisseur of timeless elegance: double-breasted semi-lined suit, three buttons, two patch pockets, and trousers with two pleats. Exclusive textile, a very lightweight, summery, and comfortable with a refined blend of linen and wool fibers.",
  },
  {
    image: "/assets/collections/img21.jpg",
    text_it:
      "Un capolavoro essenziale nel guardaroba di ogni conoscitore di eleganza senza tempo: abito semi-foderato, tre bottoni, due tasche a bugnato e pantaloni con due pieghe. Tagliato e cucito interamente a mano da un tessuto con un esclusivo design Daniel Hazard, in lana 100% S’170.",
    text_en:
      "An essential masterpiece in the wardrobe of any connoisseur of timeless elegance: semi-lined suit, three buttons, two besom pockets, and slacks with two pleats. Cut and sewn entirely by hand from a textile with an exclusive Daniel Hazard design, in 100% S’170 wool.",
  },
  {
    image: "/assets/collections/img22.jpg",
    text_it:
      "Una giacca doppiopetto eccezionale e completamente destrutturata con due tasche applicate e un taschino sul petto. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, esclusivo motivo pied de poule, caratterizzato da un interessante effetto tridimensionale, in 59% lino e 41% lana.",
    text_en:
      "An exceptional and completely unstructured double-breasted jacket with two patch pockets and a chest pocket. Sewn entirely by hand, extremely soft to the touch and comfortable to wear, exclusive houndstooth pattern, characterised by an interesting three-dimensional effect, in 59% linen and 41% wool.",
  },
];
