import { Link } from "react-router-dom";
import styled from "styled-components";

export const EventSection = styled.div`
  margin: 0px;
  padding: 0;

  background: #fff;
  box-shadow: 0px 0px 35px rgba(165, 166, 170, 0.22);
  border-radius: 9px;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`;
export const VerticalClass = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100vh;
  height: max-content;
  @media screen and (max-width: 768px) {
    //  background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 35%;
  margin: 10px auto;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    // background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
export const SecondDiv = styled.div`
  display: flex;
  height: 65%;
  margin: 10px auto;
  // background-color: green;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 600px) {
    // background-color: red;
    width: 100%;
    display: flex;
    height: 100%;
  }
`;
export const Discription = styled.div`
  font-size: 20px;
  text-align: center;
`;
export const Hordiv1 = styled.div`
  width: 20%;
  margin: 0 40px;
  // background-color: red;
  text-align: center;
  align-items: ceter;
  height: 65%;
  @media screen and (min-width: 768px and max-width:1024) {
    background-color: red;
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;
export const AboutUsFeature = styled.div`
  display: flex;
  background-color: purple;
  justify-content: space-around;
  height: 16px;
`;
export const Firsthordiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 20%;
`;
export const Secondhordiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;
export const ToolIcon = styled.div`
  height: 45px;
  width: 45px;
`;
export const Heading = styled.h1`
  color: black;
  margin: 100px auto;
  font-size: 140 px;
`;
export const ImageBody = styled.div`
  margin: 0 auto;
  padding: 10px 100px 50px;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 649px) {
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    display: flex;
  }
`;
export const CardBody = styled.div`
  // margin: 400px;
  width: 70rem;
  margin: 0 auto;
  padding: 100px;
  justify-content: center;
  z-index: 1;
  @media (min-width: 650px) and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
    // width: 100%;
  }
`;
// export const ImageCarousel = styled.div`
//   background : red;
// `;
