import React from "react";

import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";

import "../../Collections.css";

const Spring = () => {
  return (
    <div className="mt-100">
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
          <Link href="/collections/spring-summer/summer">
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
      "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca sfoderata con tre bottoni, due tasche applicate e pantaloni scollati con coulisse in vita. Tagliato e cucito esclusivamente a mano da un esclusivo tessuto Grand Hill, in 52% lino, 41% lana e 7% seta.",
    text_en:
      "Новый шедевр, обязательный в гардеробе любого современного ценителя вечной элегантности: костюм с непроклеенной курткой на три пуговицы, двумя накладными карманами и брюками без складок на талии с кулиской. Полностью вручную сшит из эксклюзивной ткани Grand Hill: 52% лён, 41% шерсть и 7% шёлк.",
  },
  {
    image: "/assets/collections/img12.jpg",
    text_it:
      "Un'eccezionale giacca sfoderata con tre bottoni e due tasche applicate, basata su un modello esclusivo disegnato e creato da Grand Hill. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, in 55% cashmere, 25% seta e 20% lino.",
    text_en:
      "Исключительный пиджак без подкладки с тремя пуговицами и двумя накладными карманами, созданный по эксклюзивной модели Даниэля Хазарда. Полностью вручную сшит, невероятно мягкий на ощупь и комфортный в носке: 55% кашемир, 25% шёлк, 20% лён.",
  },
  {
    image: "/assets/collections/img13.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
    text_en:
      "Абсолютный шедевр, незаменимый в гардеробе каждого ценителя вечной элегантности, идеально подходящий для влажного климата: костюм без подкладки с тремя пуговицами и брюками с двумя защипами, ткань с рисунком принц Уэльский, 71% шерсть, 15% шёлк, 14% лён.",
  },
  {
    image: "/assets/collections/img14.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
    text_en:
      "Абсолютный шедевр, незаменимый в гардеробе каждого ценителя вечной элегантности, идеально подходящий для влажного климата: костюм без подкладки с тремя пуговицами и брюками с двумя защипами, ткань с рисунком принц Уэльский, 71% шерсть, 15% шёлк, 14% лён.",
  },
  {
    image: "/assets/collections/img15.jpg",
    text_it:
      "Un'eccezionale giacca sfoderata con tre bottoni e due tasche applicate, basata su un modello esclusivo disegnato e creato da Grand Hill. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, in 70% cashmere, 17% seta e 13% lino.",
    text_en:
      "Исключительный пиджак без подкладки с тремя пуговицами и двумя накладными карманами, основанный на эксклюзивной модели от Даниэля Хазарда. Полностью сшит вручную, чрезвычайно мягкий на ощупь и комфортный в носке: 70% кашемир, 17% шёлк, 13% лён.",
  },
];
