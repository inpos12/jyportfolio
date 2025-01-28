import React from "react";
import { H1 } from "../../components/FontStyles";
import { Container, Row } from "../../layout/LayoutComponents";
import { CarrerDescriptionComponent } from "../../components/CareerDescription/CarrerDescription";
import {
  year2021,
  year2022,
  year2023,
  year2024,
} from "../../components/CareerDescription/CarrerDescription.json";

const style = {
  borderLeft: "3px solid white",
};
export default function CarrerDescription() {
  console.log(year2021[0].title);
  return (
    <>
      <Container style={{ flexDirection: "row" }}>
        {year2024.map((item, index) => (
          <CarrerDescriptionComponent
            border={true}
            title={year2024[0].title}
            key={index}
            descriptions={item.descriptions}
          />
        ))}

        {year2023.map((item, index) => (
          <CarrerDescriptionComponent
            height={true}
            title={year2023[0].title}
            key={index}
            descriptions={item.descriptions}
          />
        ))}
        {year2022.map((item, index) => (
          <CarrerDescriptionComponent
            border={true}
            title={year2022[0].title}
            key={index}
            descriptions={item.descriptions}
          />
        ))}
        {year2021.map((item, index) => (
          <CarrerDescriptionComponent
            title={year2021[0].title}
            key={index}
            descriptions={item.descriptions}
          />
        ))}
      </Container>
    </>
  );
}
