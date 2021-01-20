import React from 'react';
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Column1,
  // ImgWrap,
  // Img,
  Column2,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Button,
} from './SkillsElements';

const Skills = () => {
  return (
    <>
      <SkillsContainer id={'skills'}>
        <SkillsWrapper>
          <SkillsRow>
            <Column1></Column1>
            <Column2>
              <TopLine>Skills</TopLine>
              <Heading>Skills</Heading>
              <Subtitle>Skills</Subtitle>
              <BtnWrap>
                <Button>Details</Button>
              </BtnWrap>
            </Column2>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default Skills;
