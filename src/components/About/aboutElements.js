import styled from 'styled-components';

const backgroundLight = '#f9f9f9';
const topLine = '#01bf71';
// const headingDark = '#f7f8fa';
const headingLight = '#010606';
// const subtitleDark = '#fff';
const subtitleLight = '#010606';

export const AboutContainer = styled.div`
  color: #fff;
  background: ${backgroundLight};

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  } ;
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 90vh;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 15px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: auto;
  } ;
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1' 'col2';
  } ;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 60px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  } ;
`;

export const Column2 = styled.div`
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    padding: 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  } ;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
`;

// export const TextWrapper = styled.div`
//   /* max-width: 540px; */
//   padding-top: 0;
// `;

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
