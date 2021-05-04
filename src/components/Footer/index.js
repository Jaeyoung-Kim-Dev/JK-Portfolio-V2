import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMediaWrap,
  HomeLink,
  WebsiteRightsWrapper,
  WebsiteRights,
  SocialIconLink,
} from './FooterElements';
import {
  FaGithub,
  FaLinkedin,
  // FaStackOverflow,
  FaRegCopyright,
} from 'react-icons/fa';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <HomeLink to='/' onClick={toggleHome}>
          JAEYOUNG KIM
        </HomeLink>
        <WebsiteRightsWrapper>
          <WebsiteRights>DESIGNED AND DEVELOPED BY</WebsiteRights>
          <WebsiteRightsWrapper>
            <WebsiteRights>JAEYOUNG KIM</WebsiteRights>
            <WebsiteRights>
              <FaRegCopyright />
            </WebsiteRights>
            <WebsiteRights>{new Date().getFullYear()}</WebsiteRights>
          </WebsiteRightsWrapper>
        </WebsiteRightsWrapper>
        <SocialMediaWrap>
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
        </SocialMediaWrap>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
