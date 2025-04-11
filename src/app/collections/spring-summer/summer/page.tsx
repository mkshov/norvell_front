import React from "react";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

import "../../Collections.css";

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
          <Link href="/collections/spring-summer/spring">
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
      "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca sfoderata con tre bottoni, due tasche applicate e pantaloni scollati con coulisse in vita. Tagliato e cucito esclusivamente a mano da un esclusivo tessuto Grand Hill, in 52% lino, 41% lana e 7% seta.",
    text_en:
      "Новый шедевр, необходимый в гардеробе каждого современного ценителя вневременной элегантности: костюм, состоящий из неструктурированного пиджака с тремя пуговицами, двумя накладными карманами и брюк без складок с кулиской на талии. Сшит полностью вручную из эксклюзивной ткани Grand Hill: 52% лен, 41% шерсть и 7% шелк.",
  },
  {
    image: "/assets/collections/img17.jpg",
    text_it:
      "Un nuovo capolavoro, imprescindibile nel guardaroba di ogni contemporaneo conoscitore di un'eleganza senza tempo: un abito caratterizzato da una giacca destrutturata con tre bottoni, due tasche applicate e pantaloni con due pieghe e coulisse in vita. Tagliato e cucito esclusivamente a mano da un tessuto con un esclusivo motivo a scacchi Grand Hill, in 100% lino.",
    text_en:
      "Новый шедевр, необходимый в гардеробе каждого современного ценителя вневременной элегантности: костюм с неструктурированным пиджаком на трёх пуговицах, двумя накладными карманами и брюками с двумя складками и кулиской на талии. Полностью сшит вручную из ткани с эксклюзивным клетчатым узором Grand Hill, 100% лён.",
  },
  {
    image: "/assets/collections/img18.jpg",
    text_it:
      "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni conoscitore di eleganza senza tempo: una dinner jacket nera con rever a picco con un bottone e pantaloni con due pieghe, tagliati e cuciti interamente a mano in lana S’170.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: чёрный смокинг с остроконечными лацканами на одной пуговице и брюки с двумя складками, полностью сшитые вручную из шерсти S’170.",
  },
  {
    image: "/assets/collections/img19.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo, adatto a climi particolarmente umidi: abito sfoderato a tre bottoni e pantalone a due pieghe, tessuto con motivo Principe di Galles, 71% lana, 15% seta e 14% lino.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности, подходящий для особенно влажного климата: неструктурированный костюм с тремя пуговицами и брюками с двумя складками, ткань с узором Принца Уэльского, 71% шерсть, 15% шёлк и 14% лён.",
  },
  {
    image: "/assets/collections/img20.jpg",
    text_it:
      "Un capolavoro assoluto, imprescindibile nel guardaroba di ogni intenditore di eleganza senza tempo: abito semi-foderato doppiopetto, tre bottoni, due tasche applicate e pantalone con due pinces. Tessuto esclusivo, molto leggero, estivo e confortevole con una raffinata miscela di fibre di lino e lana.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: полуподкладной двубортный костюм с тремя пуговицами, двумя накладными карманами и брюками с двумя складками. Эксклюзивная ткань — очень лёгкая, летняя и комфортная, с утончённой смесью волокон льна и шерсти.",
  },
  {
    image: "/assets/collections/img21.jpg",
    text_it:
      "Un capolavoro essenziale nel guardaroba di ogni conoscitore di eleganza senza tempo: abito semi-foderato, tre bottoni, due tasche a bugnato e pantaloni con due pieghe. Tagliato e cucito interamente a mano da un tessuto con un esclusivo design Grand Hill, in lana 100% S’170.",
    text_en:
      "Незаменимый шедевр в гардеробе каждого ценителя вневременной элегантности: полуподкладной костюм, три пуговицы, два кармана с листочкой и брюки с двумя складками. Полностью сшит вручную из ткани с эксклюзивным дизайном Grand Hill, 100% шерсть S’170.",
  },
  {
    image: "/assets/collections/img22.jpg",
    text_it:
      "Una giacca doppiopetto eccezionale e completamente destrutturata con due tasche applicate e un taschino sul petto. Cucito interamente a mano, estremamente morbido al tatto e comodo da indossare, esclusivo motivo pied de poule, caratterizzato da un interessante effetto tridimensionale, in 59% lino e 41% lana.",
    text_en:
      "Исключительный, полностью неструктурированный двубортный пиджак с двумя накладными карманами и нагрудным карманом. Полностью сшит вручную, невероятно мягкий на ощупь и удобный в носке, с эксклюзивным узором «гусиная лапка», отличающийся интересным трёхмерным эффектом, из 59% льна и 41% шерсти.",
  },
];
