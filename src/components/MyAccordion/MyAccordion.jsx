"use client";
import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary, styled, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomAccordion = styled(Accordion)`
  border: none;
  box-shadow: none;
  border-top: 1px solid #8080804a;
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
  &:last-child {
    border-top: none;
    border-bottom: 1px solid #8080804a;
  }
`;

const MyAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded2, setExpanded2] = useState(false);
  const handleChange2 = (panel) => (event, isExpanded) => {
    setExpanded2(isExpanded ? panel : false);
  };

  return (
    <div>
      <CustomAccordion className="my-accordion" expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={expanded === false ? <AddIcon /> : <RemoveIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>РАЗМЕРЫ И ПОСАДКА</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>Мы рекомендуем использовать кнопку "Таблица размеров", чтобы проверить свой размер.</li>
            <li>Посадка: индивидуальная - между стандартной и облегающей посадкой.</li>
            <li>Длина костюма оптимальна для большинства людей.</li>
            <li>
              Наши костюмы могут быть сшиты с учетом соответствующего опыта. Пожалуйста, пользуйтесь услугами портного, который уверен, что сможет
              работать с нашими материалами и конструкцией.
            </li>
          </ul>
        </AccordionDetails>
      </CustomAccordion>
      <CustomAccordion className="my-accordion" expanded={expanded2 === "panel1"} onChange={handleChange2("panel1")}>
        <AccordionSummary expandIcon={expanded2 === false ? <AddIcon /> : <RemoveIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography>МАТЕРИАЛЫ И УХОД</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>76% шерсть, 20% вискоза, 4% лайкра</li>
            <li>Только сухая чистка</li>
            <li>Гладьте только при необходимости, используйте самый холодный режим.</li>
          </ul>
        </AccordionDetails>
      </CustomAccordion>
    </div>
  );
};

export default MyAccordion;
