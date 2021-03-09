import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaRegCopyright,
} from 'react-icons/fa';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              JK
            </SocialLogo>
            <WebsiteRights>
              DEVELOPED BY JAEYOUNG KIM <FaRegCopyright />{' '}
              {new Date().getFullYear()}
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://github.com/Jaeyoung-Kim-Dev'
                target='_blank'
                arial-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.linkedin.com/in/jaeyoung-kim-dev/'
                target='_blank'
                arial-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href='https://stackoverflow.com/users/13967287/jaeyoung-kim'
                target='_blank'
                arial-label='StackOverflow'
              >
                <FaStackOverflow />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
