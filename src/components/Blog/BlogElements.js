import styled from 'styled-components';
import { Link } from 'react-scroll';

const backgroundLight = '#e6eaee';
// const backgroundDark = '#0a0620';
const topLine = '#0095ff';
// const headingDark = '#f7f8fa';
const headingLight = '#010606';
// const subtitleDark = '#fff';
const subtitleLight = '#010606';
// const btnBgDark = '#01BF71';

export const BlogContainer = styled.div`
  color: #fff;
  background: ${backgroundLight};

  /* @media screen and (max-width: 768px) {
    margin ?
    padding: 50px 0;
  } ; */
`;

export const BlogWrapper = styled.div`
  /* display: grid; */
  display: flex;
  flex-wrap: wrap;
  z-index: 1;
  height: 90vh;
  min-height: 800px;
  max-height: 950px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 980px) {
    height: auto;
    padding: 0;
    min-height: 0;
  } ;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  max-width: 455px;
  height: 100%;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 40px;
    height: auto;
  }

  @media screen and (max-width: 480px) {
    padding: 30px;
  }
`;

export const ImgWrap = styled.div`
  max-width: 455px;
  height: 100%;
  padding: 20px;
  align-items: center;
  display: flex;
  margin-right: 5vw;

  @media screen and (max-width: 768px) {
    height: auto;
    margin-right: 0;
  }
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
`;

export const TopLine = styled.p`
  color: ${topLine};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${headingLight};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  } ;
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
  color: ${subtitleLight};
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
