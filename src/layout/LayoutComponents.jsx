import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 120px;
  flex-wrap: wrap;
`;
const opacity = keyframes`
 0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 33%;
  width: 100%;
  padding: 80px 0 0 0;
  animation: ${opacity} 0.8s ease-in-out;
`;
export const Col = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;
