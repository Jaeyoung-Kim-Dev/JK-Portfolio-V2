import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #030015;
`;

export const FooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  min-height: 50px;
  margin: auto;
  flex-wrap: wrap;
  padding: 0 2rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    min-height: 120px;
    justify-content: space-evenly;
  }
`;

export const HomeLink = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const WebsiteRightsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin: 0 3px;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 10px auto 0 auto; */
  /* @media screen and (max-width: 820px) {
    flex-direction: column;
  } */
`;

export const SocialIconLink = styled.a`
  color: #fff;
  margin: 0 2rem;
`;
