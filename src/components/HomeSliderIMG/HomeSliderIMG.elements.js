import styled from "styled-components";

export const Slider = styled.section`
  position: relative;
  display: flex;
  max-width: 1920px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  margin: 40px auto 0;
  overflow: hidden;
  
  @media screen and (max-width: 960px) {
    margin: 50px auto 0;
  }
`;

export const IMG = styled.img`
  height: 80vh;
  
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 100%;
  }
`;

export const LeftSlide = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  font-size: 3rem;
  color: #ffffff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  display: flex;
  
  :hover {
    color: #dcb021;
    transition: 1s ease;
  }

  @media screen and (max-width: 960px) {
    left: 15px;
    font-size: 2rem;
  }
`;

export const RightSlide = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  font-size: 3rem;
  color: #ffffff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
  display: flex;

  :hover {
    color: #dcb021;
    transition: 1s ease;
  }

  @media screen and (max-width: 960px) {
    right: 15px;
    font-size: 2rem;
  }
`;

export const Slide = styled.div`
  transition: opacity ease-in-out 3s;
`;