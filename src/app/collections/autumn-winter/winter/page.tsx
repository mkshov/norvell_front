import React from "react";

import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";

const Winter = () => {
  return (
    <div className="mt-100">
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
      "Эксклюзивное пальто на трёх пуговицах, с двумя накладными карманами с клапанами и задней хлястиковой деталью (мартингалом). Сшито вручную из эксклюзивной четырёхниточной пряжи из 100% кашемира. Высококачественная, мягкая и лёгкая пряжа для трикотажа.",
  },
  {
    image: "/assets/collections/img8.jpg",
    text_it:
      "Un esclusivo cappotto a quattro bottoni con tasche, interamente sfoderato, cucito a mano con doppio trattamento waterproof. 100% cashmere, esclusivo tessuto per maglieria super soft, adatto per capi interamente sfoderati.",
    text_en:
      "Эксклюзивное пальто на четырёх пуговицах с карманами, полностью без подкладки, сшито вручную и обработано двойной водоотталкивающей пропиткой. 100% кашемир, эксклюзивная супер-мягкая трикотажная ткань, идеально подходящая для полностью бесподкладочных изделий.",
  },
  {
    image: "/assets/collections/img9.jpg",
    text_it:
      "Un esclusivo overshirt con quattro tasche applicate e alette Safari. Caratterizzato da un tessuto accoppiato in cotone e cashmere. Cucita interamente a mano ed estremamente morbida al tatto.",
    text_en:
      "Эксклюзивная рубашка-куртка с четырьмя накладными карманами и клапанами в стиле сафари. Изготовлена из двойного материала — хлопка и кашемира. Полностью сшита вручную, чрезвычайно мягкая на ощупь.",
  },
  {
    image: "/assets/collections/img10.jpg",
    text_it:
      "Un capolavoro assoluto, indispensabile nel guardaroba di ogni conoscitore di eleganza senza tempo: una giacca a tre bottoni con due tasche applicate e una tasca a barchetta. Cucito a mano in un filo di cashmere 100% maglieria, molto morbido al tatto, con un esclusivo design a scacchi, perfetto sia per giacche foderate che sfoderate.",
    text_en:
      "Абсолютный шедевр, необходимый в гардеробе каждого ценителя вневременной элегантности: пиджак на трёх пуговицах с двумя накладными карманами и нагрудным карманом типа «лодочка». Сшит вручную из 100% кашемировой пряжи для трикотажа, очень мягкий на ощупь, с эксклюзивным клетчатым дизайном. Идеально подходит как для подкладных, так и для бесподкладочных пиджаков.",
  },
];
