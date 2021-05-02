import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRightsWrapper,
  WebsiteRights,
  SocialIcons,
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
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              JAEYOUNG KIM
            </SocialLogo>
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
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
