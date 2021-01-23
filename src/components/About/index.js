import React, { useState } from 'react';
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  ImgWrap,
  Img,
  Column2,
  TopLine,
  Heading,
  Subtitle,
} from './AboutElements';

const About = () => {
  const [photoNumber, setPhotoNumber] = useState(4);

  const myNextPhoto = () => {
    setPhotoNumber(photoNumber === 0 ? 4 : photoNumber - 1);
  };

  return (
    <>
      <AboutContainer id={'about'}>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrap>
                <Img
                  src={
                    require(`../../images/about/me${photoNumber}.jpeg`)?.default
                  }
                  alt={'me'}
                  onClick={myNextPhoto}
                />
              </ImgWrap>
            </Column1>
            <Column2>
              <TopLine>ABOUT</TopLine>
              <Heading>Hello, everyone!</Heading>
              <Subtitle>
                I have been in the IT field in Canada for more than 4 years. I'm
                knowledgeable at computer operating system, the network, and how
                to troubleshoot them.
              </Subtitle>
              <Subtitle>
                I always eager to learn new skills, so I’m majoring in Software
                Development diploma at the{' '}
                <a
                  href='https://www.sait.ca/programs-and-courses/full-time-studies/diplomas/information-technology'
                  rel='noreferrer'
                  target='_blank'
                >
                  Southern Alberta Institute of Technology
                </a>{' '}
                in{' '}
                <a
                  href='https://goo.gl/maps/JETtmSSc4aV6cG7k6'
                  rel='noreferrer'
                  target='_blank'
                >
                  Calgary, AB, Canada
                </a>{' '}
                now. This course is really interesting, and I am really enjoying
                it! <strong>My GPA is 3.89</strong>.
              </Subtitle>
              <Subtitle>
                I will do my best and be a great software developer!
              </Subtitle>
              <Subtitle>
                PS. The course ends in April 2021, and if you want to hire me,
                please feel free to contact me. Thank you!
              </Subtitle>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
