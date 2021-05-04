import styled from 'styled-components';
import { Link } from 'react-scroll';

const background = '#051321';
const heading = '#cfe8e8';
const subtitle = '#cfe8e8';

export const BlogContainer = styled.div`
  color: #fff;
  background: ${background};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    /* padding-top: 80px; */
  } ;
`;

export const BlogWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 90vh;
  min-height: 800px;
  max-height: 1050px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    min-height: 700px;
    height: auto;
  } ;
`;

export const BlogRow = styled.div`
  display: grid;
  /* grid-auto-columns: minmax(auto, 1fr); */
  grid-template-columns: auto auto;
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 1000px) {
    grid-template-areas: 'col1' 'col2';
  } ;
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding: 50px;
  max-width: 600px;

  @media screen and (max-width: 1000px) {
    padding: 30px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  } ;
`;

export const ImgWrap = styled.div`
  width: 100%;
  /* max-width: 455px; */
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding: 50px 10px 10px;
  } ;
`;

export const Img = styled.img`
  width: 90vw;
  max-width: 350px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${heading};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
  color: ${subtitle};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ButtonS = styled(Link)`
  border-radius: 5px;
  background: #fff14f;
  box-shadow: inset 0 0 0 0 #0095ff;
  white-space: nowrap;
  padding: 12px 30px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease-out 0.4s;

  &:hover {
    box-shadow: inset 300px 0 0 0 #0095ff;
    color: #fff;
  }
`;

export const ButtonA = styled.a`
  border-radius: 5px;
  background: #fff14f;
  box-shadow: inset 0 0 0 0 #0095ff;
  padding: 12px 30px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: ease-out 0.4s;
  text-decoration: none;

  &:hover {
    box-shadow: inset 300px 0 0 0 #0095ff;
    color: #fff;
  }
`;
