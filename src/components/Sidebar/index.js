import React, { useState, useEffect } from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtn,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    fetch(`./JSON/navItems.json`)
      .then((response) => response.json())
      .then((result) => setNavItems(result));
  }, []);

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navItems.map((navItem, key) => (
            <SidebarLink
              key={key}
              to={navItem.itemName.toLowerCase().replace(' ', '')}
              offset={-document.documentElement.clientHeight * 0.1}
              onClick={toggle}
            >
              {navItem.itemName}
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SideBtnWrap>
          <a
            href={require('../../Resume(Jaeyoung_Kim).pdf')?.default}
            target='_blank'
            rel='noopener noreferrer'
            download
          >
            <SidebarBtn>RESUME</SidebarBtn>
          </a>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
