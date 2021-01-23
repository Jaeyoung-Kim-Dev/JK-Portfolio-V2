import React, { useRef } from 'react';
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
  const card = useRef();

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX + rect.width / 2,
      top: rect.top + window.scrollY + rect.height / 2,
    };
  }

  const mouseMove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.current.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    console.log(getOffset(card.current).left);
    // alert('a');
  };

  const mouseEnter = () => {
    card.current.style.transition = 'none';
  };

  const mouseLeave = () => {
    card.current.style.transition = 'all 0.5s ease';
    card.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <>
      <AboutContainer id={'about'}>
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <ImgWrap
                onMouseMove={mouseMove}
                onMouseCenter={mouseEnter}
                onMouseLeave={mouseLeave}
              >
                <Img
                  src={require('../../images/me.jpg')?.default}
                  alt={'me'}
                  ref={card}
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
