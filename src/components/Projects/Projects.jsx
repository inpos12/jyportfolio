import React, { useState } from "react";
import { Col, Container, Row } from "../../layout/LayoutComponents";
import { H1, P } from "../FontStyles";
import styled from "styled-components";
import { image } from "./Projects.json"; // 이미 JSON 데이터를 불러옴

const H1Back = styled(H1)`
  position: absolute;
  z-index: -1;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  font-size: 110px;
  color: white;
  opacity: 0.07;
  letter-spacing: 10px;
  font-family: "Anton";
`;

const H1Front = styled(H1)`
  font-size: 56px;
  font-family: "Anton", serif;
  font-weight: bold;
  font-family: "Anton";
  letter-spacing: 10px;
`;

const style = {
  maxWidth: "100%",
  position: "relative",
  alignItems: "center",
  borderLeft: "3px solid white",
};

const style1 = {
  flexDirection: "row",
  justifyContent: "left",
  borderLeft: "3px solid white",
  padding: "0 80px",
  flexWrap: "wrap",
};
const Cols = styled(Col)`
  max-width: 30%;
  height: 300px;
  position: relative;
  margin: 20px;
`;
const Image = styled.img`
  max-width: 100%;
  width: 100%;

  position: relative;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  image-rendering: auto;
  image-rendering: smooth;
  image-rendering: high-quality;
  image-rendering: pixelated;
  overflow: hidden;
`;
const ImageTextBox = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  z-index: 1;
`;
const TestBox = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const SlideBackGround = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${(props) =>
    props.back ? "rgba(0, 0, 0, 0.23)" : "rgba(25, 25, 25, 0.97)"};
  left: 0;
  top: 0;
  z-index: ${(props) => (props.zIndex ? "0" : "10")};
  cursor: pointer;
`;

const SlideImageContainer = styled.div`
  position: absolute;
  width: 600px;
  z-index: 11;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  overflow: hidden;
`;
const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${(props) => props.translate}px);
`;
const SlideImage = styled.img`
  max-width: 100%;
  width: 100%;
  /* image-rendering: auto;
  image-rendering: smooth;
  image-rendering: high-quality;
  image-rendering: pixelated; */
  z-index: 10;
`;

const PrevIcon = styled.button`
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  left: 5%;
  z-index: 99;
  transform: rotate(180deg);
  cursor: pointer;
`;
const NextIcon = styled.button`
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 50%;
  right: 5%;
  z-index: 99;
  cursor: pointer;
`;

function Item(props) {
  const [detailTab, setDetailTab] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function DetailTab() {
    setDetailTab(true);
  }

  function DetailClose() {
    setDetailTab(false);
    setCurrentIndex(0); // 닫을 때 초기화
  }

  function nextSlide() {
    setCurrentIndex((prev) => (prev === props.img.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setCurrentIndex((prev) => (prev === 0 ? props.img.length - 1 : prev - 1));
  }

  return (
    <>
      {props.text.map((item, index) => (
        <Cols key={index} onClick={DetailTab} id="imageBox">
          <Image src={item.path} />
          <ImageTextBox>
            <H1 style={{ fontSize: "28px" }}>{item.name}</H1>
            <P style={{ fontSize: "16px" }}>{item.year}</P>
          </ImageTextBox>
          <SlideBackGround back zIndex />
        </Cols>
      ))}

      {detailTab && (
        <TestBox id="detailImageBox">
          <SlideBackGround onClick={DetailClose} />

          <SlideImageContainer>
            <SlideWrapper translate={-currentIndex * 600}>
              {props.img.map((img, index) => (
                <SlideImage
                  key={index}
                  src={img}
                  style={{ minWidth: "100%" }}
                />
              ))}
            </SlideWrapper>
          </SlideImageContainer>

          <PrevIcon onClick={prevSlide}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.36415 2.8637C9.01267 3.21517 9.01267 3.78502 9.36415 4.13649L18.157 12.9294C18.1961 12.9684 18.1961 13.0318 18.157 13.0708L9.36891 21.8589C9.01744 22.2104 9.01744 22.7803 9.36891 23.1317C9.72038 23.4832 10.2902 23.4832 10.6417 23.1317L19.4298 14.3436C20.1718 13.6016 20.1718 12.3986 19.4298 11.6566L10.6369 2.8637C10.2855 2.51223 9.71562 2.51223 9.36415 2.8637Z"
                fill="white"
              />
            </svg>
          </PrevIcon>

          <NextIcon onClick={nextSlide}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.36415 2.8637C9.01267 3.21517 9.01267 3.78502 9.36415 4.13649L18.157 12.9294C18.1961 12.9684 18.1961 13.0318 18.157 13.0708L9.36891 21.8589C9.01744 22.2104 9.01744 22.7803 9.36891 23.1317C9.72038 23.4832 10.2902 23.4832 10.6417 23.1317L19.4298 14.3436C20.1718 13.6016 20.1718 12.3986 19.4298 11.6566L10.6369 2.8637C10.2855 2.51223 9.71562 2.51223 9.36415 2.8637Z"
                fill="white"
              />
            </svg>
          </NextIcon>
        </TestBox>
      )}
    </>
  );
}

export default function Projects() {
  return (
    <>
      <Container style={{ flexDirection: "column" }}>
        <Row style={style}>
          <H1Front>PROJECT</H1Front>
          <H1Back>PROJECT</H1Back>
        </Row>
      </Container>
      <Container>
        <Row style={{ ...style1 }}>
          {image.map((item, index) => (
            <Item key={index} text={[item]} img={item.detailpath.path} />
          ))}
        </Row>
      </Container>
    </>
  );
}
