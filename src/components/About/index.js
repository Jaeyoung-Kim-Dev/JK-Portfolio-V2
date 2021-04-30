import React, { useState } from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  ImgWrap,
  BubbleWrapper,
  Bubble,
  Img,
  Column2,
  TopLine,
  Heading,
  Subtitle,
  Link,
} from './AboutElements';

const bubbles = [
  'Well done! You made it!',
  'Beautiful! Almost there!',
  'Good job! One more!',
  'Please touch Lego blocks!',
];

const bgCorlors = ['#6f0808', '#086f23', '#5f086f', '#080b6f'];

const About = () => {
  const [photoNumber, setPhotoNumber] = useState(3);
  // const [bubbles, setBubbles] = useState([]);
  const [currentBubble, setCurrentBubble] = useState(bubbles[3]);
  const [bgColor, setBgColor] = useState(bgCorlors[3]);

  const myNextPhoto = () => {
    setPhotoNumber(photoNumber === 0 ? 3 : photoNumber - 1);
    setCurrentBubble(photoNumber === 0 ? bubbles[3] : bubbles[photoNumber - 1]);
    setBgColor(photoNumber === 0 ? bgCorlors[3] : bgCorlors[photoNumber - 1]);
  };

  return (
    <>
      <AboutContainer id={'about'}>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrap>
                <Flip left>
                  <BubbleWrapper>
                    <Bubble bgCorlor={bgColor}>{currentBubble}</Bubble>
                  </BubbleWrapper>
                </Flip>
                <Img
                  src={
                    require(`../../images/about/me${photoNumber}.jpg`)?.default
                  }
                  alt={'me'}
                  onClick={myNextPhoto}
                />
              </ImgWrap>
            </Column1>
            <Column2>
              <Fade right cascade>
                <TopLine>ABOUT</TopLine>
                <Heading>Hello, everyone!</Heading>
                <Subtitle>
                  As a software developer, I'm self-motivated, cooperative, and
                  a dedicated team player. I believe in solving a problem by
                  good analysis and creativity to arrive at the best possible
                  solution. I enjoy learning new things without fear or
                  hesitation.
                </Subtitle>
                <Subtitle>
                  Since starting my diploma in software development from{' '}
                  <Link
                    href='https://www.sait.ca/programs-and-courses/full-time-studies/diplomas/information-technology'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Southern Alberta Institute of Technology
                  </Link>{' '}
                  in{' '}
                  <Link
                    href='https://goo.gl/maps/JETtmSSc4aV6cG7k6'
                    rel='noreferrer'
                    target='_blank'
                  >
                    Calgary, AB, Canada
                  </Link>
                  , I studied hard (GPA 3.89) and did some personal and team
                  projects. You can check my projects below.
                </Subtitle>
                <Subtitle>I'm currently looking for a job! </Subtitle>
                <Subtitle>
                  Please feel free to{' '}
                  <Link href="mailto:jaeyoung.kim.dev@gmail.com?subject=Mail from Jaeyoung's Website&body=Hello, Jaeyoung!">
                    contact me
                  </Link>
                  . Thank you!
                </Subtitle>
              </Fade>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
