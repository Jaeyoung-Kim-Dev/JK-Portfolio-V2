import React, { useState } from 'react';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  TextWrapper,
  HeroH1,
  HeroHeart,
  HeroAniWarpper,
  HeroAniText,
  HeroP,
  HeroBtnWrapper,
  Button,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import Video from '../../videos/video.mp4';
// import { Button } from '../ButtonElements';
const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg playsInline autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <TextWrapper>
          <HeroH1>
            I <HeroHeart />
          </HeroH1>
          <HeroH1>BUILDING</HeroH1>
        </TextWrapper>
        <HeroAniWarpper>
          <HeroAniText>WEBSITES</HeroAniText>
        </HeroAniWarpper>
        {/* <br /> */}
        <TextWrapper>
          <HeroP>My Name is</HeroP>
          <HeroP>JAEYOUNG KIM</HeroP>
        </TextWrapper>
        <HeroBtnWrapper>
          <Button
            href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
          >
            CONTACT {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
