import styled from 'styled-components';

const backgroundLight = '#e6eaee';
const topLine = '#0095ff';
// const headingDark = '#f7f8fa';
const headingLight = '#010606';
// const subtitleDark = '#fff';
const subtitleLight = '#010606';

export const AboutContainer = styled.div`
  color: #fff;
  background: ${backgroundLight};
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    padding-top: 80px;
  } ;
`;

export const AboutWrapper = styled.div`
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
    height: auto;
  } ;
`;

export const AboutRow = styled.div`
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
  /* margin-bottom: 15px; */
  /* padding: 60px; */
  grid-area: col1;

  /* @media screen and (max-width: 768px) {
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  } ; */
`;

export const Column2 = styled.div`
  padding: 50px;
  grid-area: col2;
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
  height: 100%;
  display: flex;
  justify-content: center;
  /* margin-left: 15px; */

  @media screen and (max-width: 480px) {
    padding: 0 10px 30px;
  } ;
`;

export const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const BubbleWrapper = styled.div``;

export const Bubble = styled.div`
  position: absolute;
  width: 170px;
  text-align: center;
  font-size: 1.3rem;
  border-radius: 30px;
  transform: translate(-25px, -50%);
  color: #fff;
  background: ${({ bgCorlor }) => bgCorlor};
  padding: 15px;

  &:before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-right: 24px solid ${({ bgCorlor }) => bgCorlor};
    border-left: 12px solid transparent;
    border-top: 12px solid ${({ bgCorlor }) => bgCorlor};
    border-bottom: 20px solid transparent;
    left: 70px;
    bottom: -24px;
  }
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

export const Link = styled.a`
  color: #0006ff;
  text-decoration: none;
`;
