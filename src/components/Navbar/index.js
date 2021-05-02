import React, { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnWrapper,
  NavBtn,
} from './NavbarElements';
import navItems from './navItems.json';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= document.documentElement.clientHeight * 0.1) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <Navlogo to='/' onClick={() => scroll.scrollToTop()}>
              JAEYOUNG KIM
            </Navlogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              {navItems.map((navItem, key) => (
                <NavItem key={key}>
                  <NavLinks
                    to={navItem.itemName.toLowerCase().replace(' ', '')}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-document.documentElement.clientHeight * 0.096}
                  >
                    {navItem.itemName}
                  </NavLinks>
                </NavItem>
              ))}
            </NavMenu>
            <NavBtnWrapper>
              <a
                href={require('../../Resume(Jaeyoung_Kim).pdf')?.default}
                target='_blank'
                rel='noopener noreferrer'
                download
              >
                <NavBtn offset={document.documentElement.clientHeight * 0.1}>
                  RESUME
                </NavBtn>
              </a>
            </NavBtnWrapper>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
