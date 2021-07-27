import React, { useState } from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import technologies from './technologies.json';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  ImgWrap,
  Bubble,
  Img,
  Column2,
  Heading,
  Subtitle,
  Link,
  TechWrapper,
  TechIconWrapper,
  TechIcon,
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
                  <Bubble bgCorlor={bgColor}>{currentBubble}</Bubble>
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
                {/* <TopLine>ABOUT</TopLine> */}
                <Heading>Hello, everyone!</Heading>
                <Subtitle>
                  As a software developer, I like to view myself as
                  self-motivated, cooperative, well organized, and a dedicated
                  team player. Solving a challenging problem fuels me. Using
                  both sides of my brain can be challenging but trying to
                  improve my creative and analytical skills.
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
                    Calgary
                  </Link>
                  , I studied hard (GPA 3.84) and won an award and a
                  scholarship.
                </Subtitle>
                <Subtitle>
                  The technologies below are what I've been working with these
                  days.
                </Subtitle>
                <TechWrapper>
                  {technologies.map((tech, key) => (
                    <TechIconWrapper key={key} href={tech.link} target='_blank'>
                      <TechIcon src={tech.imgLink} alt={tech.name} />
                    </TechIconWrapper>
                  ))}
                </TechWrapper>
              </Fade>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
