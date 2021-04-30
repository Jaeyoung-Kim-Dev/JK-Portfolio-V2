import React from 'react';
import Fade from 'react-reveal/Fade';
import {
  BlogContainer,
  BlogWrapper,
  ImgWrap,
  Img,
  DetailWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  TextWrapper,
  ButtonA,
} from './BlogElements';

const Blog = () => {
  return (
    <>
      <BlogContainer id={'blog'}>
        <BlogWrapper>
          <ImgWrap>
            <Img src={require('../../images/blog.jpg')?.default} alt={'me'} />
          </ImgWrap>
          <DetailWrapper>
            <TextWrapper>
              <Fade right cascade>
                <TopLine>Blog</TopLine>
                <Heading>Learning something new!</Heading>
                <Subtitle>
                  This blog is my knowledge of software development that I want
                  to share with others or something I want to remember.
                </Subtitle>
                <Subtitle>Check out my posts!</Subtitle>
                <BtnWrap>
                  {/* <Button>View postings</Button> */}
                  <ButtonA
                    href='https://jaeyoung-kim-dev.medium.com/react-application-without-redux-and-with-redux-cbb88853ad91'
                    rel='noreferrer'
                    target='_blank'
                  >
                    MY BLOG
                  </ButtonA>
                </BtnWrap>
              </Fade>
            </TextWrapper>
          </DetailWrapper>
        </BlogWrapper>
      </BlogContainer>
    </>
  );
};

export default Blog;
