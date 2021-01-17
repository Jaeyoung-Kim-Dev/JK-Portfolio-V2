import styled from 'styled-components';
// import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';

export const ProjectsContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e6eaee;

  @media screen and (max-width: 768px) {
    height: auto;
    padding-top: 5vh;
    padding-bottom: 5vh;
  }
`;

export const ProjectsWrapper = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const ProjectsCard = styled.div`
  width: 280px;
  height: 420px;
  background-color: #fff;
  background: linear-gradient(#f8f8f8, #fff);
  box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4);
  border-radius: 6px;
  overflow: hidden;
  position: relative;
  margin: 1rem;

  &:hover > * {
    height: 100%;
    border-radius: 0 5px 5px 0;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
  }
`;

export const ProjectsIcon = styled.img`
  height: 60px;
  width: 60px;
`;

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const ProjectLangWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`;

export const ProjectLang = styled.li`
  border-radius: 10px;
  /* border: 1px solid; */
  border-color: none;
  padding: 5px;
  margin: 5px;
  background: #000;
  color: #fff;
  font-size: 0.8rem;
`;

export const ProjectMenuWrapper = styled.div`
  display: flex;
  margin: 20px;
`;

export const ProjectFilterBtn = styled.div`
  height: 35px;
  border-radius: 20px;
  margin: 5px;
  font-size: 1rem;
  background: white;
  cursor: pointer;
  text-align: center;
`;

export const ProjectSearchBar = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 20px;
  padding: 13px;
  margin: 5px;
  font-size: 1rem;
  background: transparent;

  &:focus {
    background: white;
  }
`;

export const ProjectsAdditional = styled.div`
  position: absolute;
  width: 100%;
  height: 80px;
  align-items: center;
  background: #4296ea; //linear-gradient(#de685e, #ee786e); */
  transition: height 0.4s;
  overflow: hidden;
  z-index: 2;
`;

export const ProjectTitle = styled.div`
  width: 100%;
  height: 50px;
  padding-top: 1.5rem;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
`;

export const ProjectsMoreInfo = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  height: 70%;
  margin-top: 16%;
`;

export const ProjectCoords = styled.div`
  margin: 0 1rem;
  color: #fff;
  font-size: 1rem;
`;

export const ProjectStats = styled.div`
  font-size: 2rem;
  display: flex;
  justify-content: space-evenly;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  top: auto;

  color: #fff;
`;

export const ProjectsLink = styled.a`
  font-size: 0.9em;
  margin-left: 2rem;
  margin-right: 2rem;
  color: #fff;

  &:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsGeneral = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  right: 0;
  z-index: 1;
  box-sizing: border-box;
  padding: 2rem;
  padding-top: 40%;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectsDetails = styled.p`
  font-size: 1rem;
  line-height: 1.4;
  margin-bottom: 5px;
`;

export const ProjectsMore = styled.div`
  left: 2rem;
  bottom: 2rem;
  font-size: 0.8em;
`;
