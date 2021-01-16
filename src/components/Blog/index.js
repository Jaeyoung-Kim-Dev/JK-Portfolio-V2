import React from 'react';
import {
  BlogContainer,
  BlogWrapper,
  BlogRow,
  Column1,
  ImgWrap,
  Img,
  Column2,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Button,
} from './BlogElements';

const Blog = () => {
  return (
    <>
      <BlogContainer id={'blog'}>
        <BlogWrapper>
          <BlogRow>
            <Column1>
              <ImgWrap>
                {/* <Img src={img} alt={alt} /> */}
                <Img
                  src={require('../../images/blog.jpg')?.default}
                  alt={'me'}
                />
              </ImgWrap>
            </Column1>
            <Column2>
              <TopLine>Blog</TopLine>
              <Heading>Learning something new!</Heading>
              <Subtitle>
                This blog is my knowledge of software development that I want to
                share with others or something I want to remember.
              </Subtitle>
              <BtnWrap>
                <Button>View postings</Button>
              </BtnWrap>
            </Column2>
          </BlogRow>
        </BlogWrapper>
      </BlogContainer>
    </>
  );
};

export default Blog;