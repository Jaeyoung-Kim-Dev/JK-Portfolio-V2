import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

const primary = '#01BF71';
const textColor = '#fff';

export const Nav = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? '#00223D' : 'transparent')};
  height: 10vh;
  margin-top: -10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? '0px 3px 10px rgba(0, 0, 0, 0.4)' : ''};
  @media screen and (max-width: 1100px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const Navlogo = styled(LinkR)`
  color: ${textColor};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 1100px) {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${textColor};
    right: 0;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 10vh;
`;

export const NavLinks = styled(LinkS)`
  color: ${textColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid ${primary};
  }
  &:hover {
    color: ${primary};
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

// export const NavBtnLink = styled(LinkR)`
//   border-radius: 5px;
//   background: #fff14f;
//   box-shadow: inset 0 0 0 0 #0095ff;
//   white-space: nowrap;
//   padding: 10px 22px;
//   color: #010606;
//   font-size: 16px;
//   outline: none;
//   border: none;
//   cursor: pointer;
//   transition: ease-out 0.4s;
//   text-decoration: none;
//   &:hover {
//     color: #fff;
//     box-shadow: inset 300px 0 0 0 #0095ff;
//   }
// `;
export const NavBtnLink = styled(LinkR)`
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  padding: 10px 22px;
  outline: none;
  border: 3px solid #fff14f;
  cursor: pointer;
  position: relative;
  transition: ease-out 0.4s;
  text-decoration: none;
  z-index: 1;

  &:hover {
    color: #fff;
    cursor: pointer;
    border: 3px solid #0095ff;
  }

  &::before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: '';
    background-color: #0095ff;
  }

  &:hover::before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;
