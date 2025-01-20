import React from "react";
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

const style = {
  borderLeft: "3px solid white",
};
export default function Home() {
  console.log(projects[0].descriptions);
  return (
    <>
      <Container
        style={{
          height: "90vh",
        }}
      >
        <Row style={{ ...style, alignItems: "center", paddingLeft: "20px" }}>
          <img
            src={ProfileImg}
            style={{ width: "30%", borderRadius: "30px" }}
          />
          <H2 style={{ margin: "20px" }}>위재열</H2>
          <H5 style={{ marginBottom: "20px" }}>
            개인이 아닌 모두를 위해 일하고싶은 사람
          </H5>
          {infoData.map((item, index) => (
            <InfoItem
              key={index}
              title={item.title}
              descriptions={item.descriptions}
            />
          ))}
        </Row>
        <Row style={{ flexDirection: "column" }}>
          <Col style={{ flexDirection: "column" }}>
            <HistoryTitle title={education[0].title} />
            {education.map((item, index) => (
              <Profile2
                key={index}
                size="40%"
                sized="100%"
                descriptions={item.descriptions}
              />
            ))}
          </Col>
          <Col style={{ flexDirection: "column" }}>
            <HistoryTitle title={license[0].title} />
            {license.map((item, index) => (
              <Profile2
                key={index}
                size="40%"
                sized="100%"
                descriptions={item.descriptions}
              />
            ))}
          </Col>
          <Col style={{ flexDirection: "column" }}>
            <HistoryTitle title={introduction[0].title} />
            {introduction.map((item, index) => (
              <Profile2
                key={index}
                size="0%"
                sized="100%"
                descriptions={item.descriptions}
              />
            ))}
          </Col>
          <Col style={{ flexDirection: "column" }}>
            <HistoryTitle title={competency[0].title} />
            {competency.map((item, index) => (
              <Profile2
                key={index}
                size="0%"
                sized="90%"
                descriptions={item.descriptions}
              />
            ))}
          </Col>
        </Row>
        <Row align="column">
          <HistoryTitle title={projects[0].title} />
          {projects.map((item, index) => (
            <Profile3 key={index} descriptions={item.descriptions} />
          ))}
        </Row>
      </Container>
    </>
  );
}
