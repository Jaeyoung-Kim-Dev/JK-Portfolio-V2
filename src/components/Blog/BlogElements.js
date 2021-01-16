import styled from 'styled-components';
import { Link } from 'react-scroll';

const backgroundLight = '#f9f9f9';
const topLine = '#01bf71';
// const headingDark = '#f7f8fa';
const headingLight = '#010606';
// const subtitleDark = '#fff';
const subtitleLight = '#010606';
// const btnBgDark = '#01BF71';
const btnBgLight = '#010606';
// const btnTxtDark = '#010606';
const btnTxtLight = '#fff';
// const btnBgHoverDark = '#fff';
const btnBgHoverLight = '#01BF71';

export const BlogContainer = styled.div`
  color: #fff;
  background: ${backgroundLight};

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  } ;
`;

export const BlogWrapper = styled.div`
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

export const BlogRow = styled.div`
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

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${btnBgLight};
  white-space: nowrap;
  padding: 12px 30px;
  color: ${btnTxtLight};
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${btnBgHoverLight};
  }
`;
