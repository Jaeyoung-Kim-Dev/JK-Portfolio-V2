import React, { useState } from 'react';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  ImgWrap,
  AboutMsg,
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
  'Excellent! Try another shot?',
  'Good job! One more!',
  'Please touch Lego blocks!',
];

const bgCorlors = ['#6f0808', '#086f23', '#6f3308', '#5f086f', '#080b6f'];

const About = () => {
  const [photoNumber, setPhotoNumber] = useState(4);
  // const [bubbles, setBubbles] = useState([]);
  const [currentBubble, setCurrentBubble] = useState(bubbles[4]);
  const [bgColor, setBgColor] = useState(bgCorlors[4]);

  const myNextPhoto = () => {
    setPhotoNumber(photoNumber === 0 ? 4 : photoNumber - 1);
    setCurrentBubble(photoNumber === 0 ? bubbles[4] : bubbles[photoNumber - 1]);
    setBgColor(photoNumber === 0 ? bgCorlors[4] : bgCorlors[photoNumber - 1]);
  };

  return (
    <>
      <AboutContainer id={'about'}>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrap>
                <Flip left>
                  <AboutMsg bgCorlor={bgColor}>{currentBubble}</AboutMsg>
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
                  I have been in the IT field in Canada for more than 4 years.
                  I'm knowledgeable at computer operating system, the network,
                  and how to troubleshoot them.
                </Subtitle>
                <Subtitle>
                  I always eager to learn new skills, so I’m majoring in
                  Software Development diploma at the{' '}
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
                  </Link>{' '}
                  now. This course is really interesting, and I am really
                  enjoying it! My current <strong>GPA</strong> is{' '}
                  <strong>3.89</strong>.
                </Subtitle>
                <Subtitle>
                  I will do my best and be a great software developer!
                </Subtitle>
                <Subtitle>
                  PS. The course ends in April 2021, and if you want to hire me,
                  please feel free to contact me. Thank you!
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
