import React from "react";
import { Container, Row } from "../LayoutComponents";
import { H1, H2, H3, H4, H5, P } from "../../components/FontStyles";
import styled from "styled-components";
import { Link } from "react-router-dom";

const H1Navbar = styled(H1)`
  font-family: "Anton";
  letter-spacing: 5px;
`;
const H5Navbar = styled(H5)`
  font-family: "Anton";
  letter-spacing: 3px;
`;

const Li = styled.li`
  position: relative;
  color: white;

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
      <Container style={{ borderBottom: "3px solid white" }}>
        <Row
          style={{
            padding: "30px 20px",
            width: "55%",
            borderLeft: "3px solid white",
          }}
        >
          <H1Navbar color="#E0e0e0" weight="bold">
            Portfolio
          </H1Navbar>
        </Row>
        <Row
          style={{ padding: "30px 0", width: "45%", justifyContent: "center" }}
        >
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link to="/">
              <Li>
                <H5Navbar>HOME</H5Navbar>
              </Li>
            </Link>
            <Link to="/CarrerDescription">
              <Li>
                <H5Navbar>CAREER DESCRIPTION</H5Navbar>
              </Li>
            </Link>
            <Link to="/Project">
              <Li>
                <H5Navbar>PROJECTS</H5Navbar>
              </Li>
            </Link>
          </ul>
        </Row>
      </Container>
    </>
  );
}
