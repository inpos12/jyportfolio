import React from "react";
import { H1, H2, H3, H4, H5, H6, P, font } from "../FontStyles";
import { Col } from "../../layout/LayoutComponents";
import styled from "styled-components";

const StyledDes = styled.div`
  width: ${(props) => props.size || "40%"};
`;

// export const TextBox = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 20px;
// `;

// const style = {
//   display: "flex",
//   alignItems: "center",
//   marginBottom: "20px",
// };

export function Title(props) {
  return <H5 weight={font[2]}>{props.title}</H5>;
}
function Des(props) {
  return <P weight={font[3]}>{props.des}</P>;
}

const infobox = {
  width: "70%",
  marginBottom: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};
export function InfoItem({ title, descriptions }) {
  return (
    <Col
      style={{
        flexDirection: "row",
      }}
    >
      <div style={{ width: "30%", marginBottom: "10px" }}>
        <Title title={title} />
      </div>
      <div style={infobox}>
        {descriptions.map((des, index) => (
          <Des key={index} des={des} />
        ))}
      </div>
    </Col>
  );
}
export function HistoryTitle(props) {
  return (
    <>
      <div style={{ width: "100%", marginBottom: "10px" }}>
        <H5 weight={font[2]}>{props.title}</H5>
      </div>
    </>
  );
}
//

//

export function Profile2({ title, descriptions, size, sized }) {
  return (
    <Col style={{ flexDirection: "column" }}>
      <HistoryTitle title={title} />
      {descriptions.map((des, index) => (
        <div key={index} style={{ display: "flex", marginBottom: "5px" }}>
          <StyledDes size={size}>
            <P color="gray" weight={font[3]}>
              {des.year}
            </P>
          </StyledDes>
          <StyledDes size={sized}>
            <P weight={font[3]}>{des.company}</P>
          </StyledDes>
        </div>
      ))}
    </Col>
  );
}

export function Profile3({ descriptions }) {
  return (
    <>
      <Col style={{ flexDirection: "column" }}>
        {descriptions.map((item, index) => (
          <div key={index}>
            <StyledDes
              size="45%"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <H5 style={{ fontSize: "14px" }} weight={font[3]}>
                {item.subtitle}
              </H5>
              <P style={{ fontSize: "14px" }} color="gray" weight={font[3]}>
                {item.year}
              </P>
            </StyledDes>
            <StyledDes size="100%">
              <P style={{ fontSize: "15px" }} color="gray" weight={font[3]}>
                {item}
              </P>
            </StyledDes>
          </div>
        ))}
      </Col>
    </>
  );
}
