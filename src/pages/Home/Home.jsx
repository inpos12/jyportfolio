import React, { act } from "react";
import {
  HistoryTitle,
  InfoItem,
  Profile2,
  Profile3,
} from "../../components/Profile/Profile.jsx";
import { Container, Row, Col } from "../../layout/LayoutComponents";
import {
  infoData,
  history,
  awards,
  active,
  projects,
} from "../../components/Profile/Profile.json";
import { H2 } from "../../components/FontStyles.js";

export default function Home() {
  return (
    <>
      <Container style={{ display: "flex" }}>
        <Row style={{ padding: "40px 0", width: "60%" }}>
          <H2>위재열</H2>
        </Row>
      </Container>
      <Container>
        <Row>
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
            <HistoryTitle title={history[0].title} />
            {history.map((item, index) => (
              <Profile2
                key={index}
                size="40%"
                sized="30%"
                descriptions={item.descriptions}
              />
            ))}
          </Col>
          <Col style={{ flexDirection: "column" }}>
            <HistoryTitle title={awards[0].title} />
            {awards.map((item, index) => (
              <Profile2
                key={index}
                size="10%"
                sized="90%"
                descriptions={item.descriptions}
              />
            ))}
          </Col>
          <Col style={{ flexDirection: "column" }}>
            <HistoryTitle title={active[0].title} />
            {active.map((item, index) => (
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
