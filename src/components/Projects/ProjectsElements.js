import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

export const ProjectsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 850px;
  }

  @media screen and (max-width: 480px) {
    height: 1100px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  width: 300px;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 630px) {
    height: auto;
  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectsH2 = styled.h2`
  font-size: 1.4rem;
  margin-bottom: 10px;
`;

export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const ProjectLangWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

export const ProjectLang = styled.li`
  border-radius: 10px;
  border: 1px solid;
  border-color: none;
  padding: 5px;
  margin: 5px;
  color: blue;
  font-size: 0.8rem;
`;

export const ProjectMenuWrapper = styled.div`
  display: flex;
  margin: 20px;
`;

export const ProjectFilterBtn = styled.div`
  height: 35px;
  border-radius: 20px;
  padding: 13px;
  margin: 5px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
`;

export const ProjectSearchBar = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 20px;
  padding: 13px;
  margin: 5px;
  font-size: 1rem;
`;
