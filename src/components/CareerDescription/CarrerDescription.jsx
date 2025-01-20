import React from "react";
import { H5, P } from "../../components/FontStyles";
import { Row } from "../../layout/LayoutComponents";
import styled from "styled-components";
import { StyledDes } from "../Profile/Profile";

const Pfont = styled(P)`
  font-size: 14px;
  line-height: 1.7;
  padding-left: 25px;
`;

const RowLine = styled(Row)`
  max-width: 48%;
  width: 100%;
  height: ${(props) => (props.height ? "310px" : "100vh")};
  padding: 20px 0 20px 20px;
  border-left: ${(props) => (props.border ? "3px solid white" : "")};
`;
const H5Style = styled(H5)`
  position: relative;
  padding: 5px 0 25px 30px;
  &::before {
    content: "";
    position: absolute;
    background-color: white;
    width: 100%;
    height: 3px;
    bottom: 15px;
    left: 0;
    z-index: 100;
  }
  &::after {
    content: "";
    left: 100%;
    position: absolute;
    bottom: -5px;
    border-style: solid;
    border-width: 20px 0 20px 22px;
    border-color: transparent transparent transparent white;
    z-index: 100;
  }
`;
const AdditionalStyledComponent = styled.div`
  position: absolute;
  background-color: white;
  width: 20px;
  height: 20px;
  bottom: 5px;
  left: 0px;
  z-index: 101;
  border-radius: 50%;
`;
export function CarrerDescriptionComponent(props) {
  return (
    <>
      <RowLine height={props.height} border={props.border}>
        <H5Style>
          <AdditionalStyledComponent /> {props.title}
        </H5Style>
        {props.descriptions.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            <StyledDes size="50%">
              <Pfont>{item.year}</Pfont>
            </StyledDes>
            <StyledDes size="50%">
              <Pfont>{item.descriptions}</Pfont>
            </StyledDes>
          </div>
        ))}
      </RowLine>
    </>
  );
}
