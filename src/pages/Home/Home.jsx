import React from "react";
import styled from "styled-components";
import {
  HistoryTitle,
  InfoItem,
  Profile2,
  Profile3,
} from "../../components/Profile/Profile.jsx";
import { Container, Row, Col } from "../../layout/LayoutComponents";
import {
  infoData,
  education,
  license,
  introduction,
  competency,
  projects,
} from "../../components/Profile/Profile.json";
import { H2, H5 } from "../../components/FontStyles.js";
import ProfileImg from "../../assets/profile2.jpg";
import { ColNew, RowNew } from "../../components/Profile/Profile.jsx";
import { font } from "../../components/FontStyles.js";

const style = {
  borderLeft: "3px solid white",
};
export default function Home() {
  console.log(projects[0].descriptions);
  return (
    <body>
      <Container
        style={{
          height: "90vh",
        }}
      >
        <RowNew
          style={{
            ...style,
            alignItems: "center",
            paddingLeft: "20px",
          }}
        >
          <img
            src={ProfileImg}
            style={{ width: "30%", borderRadius: "30px" }}
          />
          <H2 style={{ margin: "20px" }}>위재열</H2>
          <H5 style={{ marginBottom: "20px" }}>
            개인이 아닌 모두를 위해 일하고 싶은 사람
          </H5>
          {infoData.map((item, index) => (
            <InfoItem
              key={index}
              title={item.title}
              descriptions={item.descriptions}
            />
          ))}
        </RowNew>
        <RowNew style={{ flexDirection: "column" }}>
          <ColNew style={{ flexDirection: "column" }}>
            <HistoryTitle title={education[0].title} />
            {education.map((item, index) => (
              <Profile2
                key={index}
                size="40%"
                sized="100%"
                descriptions={item.descriptions}
              />
            ))}
          </ColNew>
          <ColNew style={{ flexDirection: "column" }}>
            <HistoryTitle title={license[0].title} />
            {license.map((item, index) => (
              <Profile2
                key={index}
                size="40%"
                sized="100%"
                descriptions={item.descriptions}
              />
            ))}
          </ColNew>
          <ColNew style={{ flexDirection: "column" }}>
            <HistoryTitle title={competency[0].title} />
            {competency.map((item, index) => (
              <Profile2
                key={index}
                size="0%"
                sized="90%"
                descriptions={item.descriptions}
              />
            ))}
          </ColNew>
        </RowNew>
        <RowNew align="column">
          <H5 style={{ marginBottom: "16px" }} weight={font[2]}>
            자기소개서
          </H5>
          {projects.map((item, index) => (
            <Profile3 key={index} descriptions={item.descriptions} />
          ))}
        </RowNew>
      </Container>
    </body>
  );
}
