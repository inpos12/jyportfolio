import React from "react";
import { Container, Row } from "../LayoutComponents";
import { H1, H2, H3, H4, H5, P } from "../../components/FontStyles";
import styled from "styled-components";

const Li = styled.li`
  position: relative;

  & ::after {
    content: ""; /* 가상 요소가 렌더링되도록 content 속성 추가 */
    background-color: white;
    width: 100%; /* 부모 크기 맞추기 */
    height: 100%; /* 부모 크기 맞추기 */
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.4s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &:hover ::after {
    transform: scaleX(1);
  }
  &:hover {
    color: black;
  }
`;

export default function Navbar() {
  return (
    <>
      <Container>
        <Row style={{ padding: "60px 0", width: "55%" }}>
          <H1 color="#E0e0e0" weight="bold">
            Portfolio
          </H1>
        </Row>
        <Row style={{ padding: "60px 0", width: "45%" }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Li>
              <H5>HOME</H5>
            </Li>
            <Li>
              <H5>PROJECTS</H5>
            </Li>
            <Li>
              <H5>CONTACT</H5>
            </Li>
          </ul>
        </Row>
      </Container>
    </>
  );
}
