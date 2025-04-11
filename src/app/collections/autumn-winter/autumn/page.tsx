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
      "Un capolavoro assoluto, essenziale nel guardaroba di ogni conoscitore di eleganza senza tempo: un abito doppiopetto con sei bottoni e due tasche a taglio, e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Grand Hill, 93% lana e cashmere S’170.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: двубортный костюм с шестью пуговицами и двумя косыми карманами, а также брюки с двумя складками. Сшито вручную из очень мягкой и плотной ткани с эксклюзивным дизайном от Grand Hill, 93% шерсть и кашемир S’170.",
  },
  {
    image: "/assets/collections/img2.jpg",
    text_it:
      "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni conoscitore di un'eleganza senza tempo: un abito a tre bottoni con due tasche a taglio, e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Grand Hill, 93% lana e cashmere S’170.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: костюм на трёх пуговицах с двумя косыми карманами и брюками с двумя складками. Сшито вручную из очень мягкой и плотной ткани с эксклюзивным дизайном от Grand Hill, 93% шерсть и кашемир S’170.",
  },
  {
    image: "/assets/collections/img3.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta, interamente destrutturata. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: пиджак на трёх пуговицах с двумя накладными карманами и нагрудным карманом типа «лодочка», полностью без внутренней конструкции. Сшит вручную из 100% кашемировой пряжи для трикотажа, очень мягкий на ощупь, с эксклюзивным клетчатым дизайном, идеально подходит как для подкладных, так и для бесподкладочных пиджаков.",
  },
  {
    image: "/assets/collections/img4.jpg",
    text_it:
      "Da un modello esclusivo disegnato da Grand Hill, una giacca a tre bottoni con tasche per biglietti e patta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "По эксклюзивной модели, разработанной Даниэлем Хазаром: пиджак на трёх пуговицах с билетными карманами и клапанами. Сшит вручную из 100% кашемировой пряжи для трикотажа, очень мягкий на ощупь, с эксклюзивным клетчатым дизайном. Идеально подходит как для подкладных, так и для бесподкладочных пиджаков.",
  },
  {
    image: "/assets/collections/img5.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di un'eleganza senza tempo: un abito a tre bottoni con due tasche e un pantalone con due pieghe. Cucito a mano in un tessuto molto morbido e pieno con un esclusivo design Grand Hill, 93% lana e cashmere S’170.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: костюм на трёх пуговицах с двумя карманами и брюками с двумя складками. Сшит вручную из очень мягкой и плотной ткани с эксклюзивным дизайном от Grand Hill, 93% шерсть и кашемир S’170.",
  },
  {
    image: "/assets/collections/img6.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: пиджак на трёх пуговицах с двумя накладными карманами и нагрудным карманом типа «лодочка». Сшит вручную из 100% кашемировой пряжи для трикотажа, очень мягкий на ощупь, с эксклюзивным клетчатым дизайном. Идеально подходит как для подкладных, так и для бесподкладочных пиджаков.",
  },
];

export default Autumn;
