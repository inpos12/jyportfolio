import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 38px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
export const H2 = styled.h2`
  font-size: 34px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
export const H3 = styled.h3`
  font-size: 30px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
export const H4 = styled.h4`
  font-size: 26px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
`;
export const H5 = styled.h5`
  font-size: 22px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: 1.6;
`;
export const H6 = styled.h6`
  font-size: 19px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: 1.4;
`;
export const P = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  margin-left: 20px;
`;

export const font = ["light", "normal", "bold", "bolder"];
