import React from 'react';
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
import navItems from '../Navbar/navItems.json';

const Sidebar = ({ isOpen, toggle }) => (
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
          href={require('../../Resume_Jaeyoung_Kim.pdf')?.default}
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

export default Sidebar;
