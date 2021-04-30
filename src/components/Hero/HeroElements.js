import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';
import { FaHeart } from 'react-icons/fa';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  /* min-height: 800px; */
  max-height: 1050px;
  position: relative;
  z-index: 1;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;

  @media screen and (max-width: 480px) {
    height: 70%;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 3rem;
  text-align: center;
  letter-spacing: 0.5rem;
  word-spacing: 0.5rem;
  margin: 1rem 1rem;
  font-family: 'Inconsolata', monospace;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    /* margin: 30px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const HeroHeart = styled(FaHeart)`
  color: red;
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const HeroAniWarpper = styled.div`
  position: relative;
  margin: 2rem 0 6rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: white;
    width: 2px;
    height: 100%;
    align-items: center;
    animation: blinkCursor 0.8s steps(3) infinite;
  }

  @keyframes blinkCursor {
    0%,
    75% {
      opacity: 1;
    }
    76%,
    100% {
      opacity: 0;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    /* margin: 30px; */
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroAniText = styled.h1`
  color: #fff;
  font-size: 70px;
  text-align: center;
  position: relative;
  letter-spacing: 20px;
  animation: typing 6s steps(8) infinite;
  overflow: hidden;
  font-family: 'Inconsolata', monospace;
  -webkit-text-size-adjust: 100%;
  -webkit-appearance: none;

  @keyframes typing {
    0%,
    90%,
    100% {
      width: 0;
    }
    30%,
    60% {
      width: 440px;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 45px;
    letter-spacing: 10px;

    @keyframes typing {
      0%,
      90%,
      100% {
        width: 0;
      }
      30%,
      60% {
        width: 265px; // org: 260px
      }
    }
  }
`;

export const HeroP = styled.p`
  margin: 0.5rem;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;
  letter-spacing: 0.2rem;
  word-spacing: 0.5rem;
  line-height: 250%;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// export const Button = styled(Link)`
export const Button = styled.a`
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
  text-decoration: none;
  /* transition: all 0.2s ease-in-out; */
  transition: ease-out 0.4s;

  &:hover {
    box-shadow: inset 300px 0 0 0 #0095ff;
    color: #fff;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
