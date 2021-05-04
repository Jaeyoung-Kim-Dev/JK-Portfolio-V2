import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  BlogContainer,
  BlogWrapper,
  BlogRow,
  ImgWrap,
  Img,
  Column1,
  Column2,
  Heading,
  Subtitle,
  BtnWrap,
  ButtonA,
} from './BlogElements';

const Blog = () => {
  return (
    <>
      <BlogContainer id={'blog'}>
        <BlogWrapper>
          <BlogRow>
            <Column1>
              <ImgWrap>
                <Img
                  src={require('../../images/blog.jpg')?.default}
                  alt={'me'}
                />
              </ImgWrap>
            </Column1>
            <Column2>
              <Fade right cascade>
                <Heading>Learning something new!</Heading>
                <Subtitle>
                  This blog is my knowledge of software development that I want
                  to share with others or something I want to remember.
                </Subtitle>
                <Subtitle>Check out my posts!</Subtitle>
                <BtnWrap>
                  <ButtonA
                    href='https://jaeyoung-kim-dev.medium.com/react-application-without-redux-and-with-redux-cbb88853ad91'
                    rel='noreferrer'
                    target='_blank'
                  >
                    MY BLOG
                  </ButtonA>
                </BtnWrap>
              </Fade>
            </Column2>
          </BlogRow>
        </BlogWrapper>
      </BlogContainer>
    </>
  );
};

export default Blog;
