import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsAdditional,
  ProjectTitle,
  ProjectsMoreInfo,
  ProjectCoords,
  ProjectStats,
  ProjectsGeneral,
  ProjectsDetails,
  ProjectLangWrapper,
  ProjectLang,
  ProjectMenuWrapper,
  ProjectFilterBtn,
  ProjectSearchBar,
  ProjectsMore,
  ProjectsLink,
  ProjectsIcon,
} from './ProjectsElements';
import './style.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // const [techs, setTechs] = useState([]);
  const [queryText, setQueryText] = useState('');
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    fetch('./JSON/projects.json')
      .then((response) => response.json())
      .then((result) => setProjects(result));
  }, []);

  useEffect(() => {
    let techList = [];
    projects.forEach((project) => {
      let tempList = project['langs']; //.split(' ');
      // techList = [...techList, tempList];
      techList.push(tempList);
      // techList.push(...tempList);
      // console.log(techList);
    });
  }, [projects]);

  useEffect(() => {
    if (document.documentElement.clientWidth < 500) {
      setMobileScreen(true);
    } else setMobileScreen(false);

    console.log(document.documentElement.clientWidth);
  }, []);

  const searchProject = (text) => {
    setQueryText(text);
  };

  let filteredProjects = projects;
  filteredProjects = filteredProjects.filter((project) => {
    return project['name'].toLowerCase().includes(queryText.toLowerCase());
  });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 870, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
  ];

  // debugger;
  // ProjectsAdditional, ProjectTitle, ProjectsMoreInfo, ProjectCoords, ProjectStats, ProjectsGeneral
  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectMenuWrapper>
        <ProjectFilterBtn>Filter</ProjectFilterBtn>
        <ProjectSearchBar
          type={'text'}
          placeholder={'Search'}
          onChange={(e) => searchProject(e.target.value)}
        />
      </ProjectMenuWrapper>
      <ProjectsWrapper>
        <Carousel breakPoints={breakPoints} showArrows={!mobileScreen}>
          {filteredProjects.map((project, key) => (
            <ProjectsCard key={key}>
              <ProjectsAdditional>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectsMoreInfo>
                  <ProjectsIcon
                    src={
                      require(`../../images/projects/${project.img}`)?.default
                    }
                    alt={project.name}
                  />
                  <ProjectCoords>
                    <ProjectLangWrapper>
                      {project.langs.map((lang, langKey) => (
                        <ProjectLang key={langKey}>{lang}</ProjectLang>
                      ))}
                    </ProjectLangWrapper>
                  </ProjectCoords>
                  <ProjectStats>
                    <ProjectsLink
                      href={`${project.git}`}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <FaGithub />
                    </ProjectsLink>
                    <ProjectsLink
                      href={`${project.link}`}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <FaExternalLinkAlt />
                    </ProjectsLink>
                  </ProjectStats>
                </ProjectsMoreInfo>
              </ProjectsAdditional>
              <ProjectsGeneral>
                <ProjectsIcon
                  src={require(`../../images/projects/${project.img}`)?.default}
                  alt={project.name}
                />
                <div>
                  {project.details.map((detail, detailKey) => (
                    <ProjectsDetails key={detailKey}>{detail}</ProjectsDetails>
                  ))}
                </div>

                <ProjectsMore>Mouse over the card for more info</ProjectsMore>
              </ProjectsGeneral>
            </ProjectsCard>
          ))}
        </Carousel>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
