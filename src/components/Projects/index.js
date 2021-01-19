import React, { useState, useEffect } from 'react';
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

const Projects = () => {
  const [projects, setProjects] = useState([]);
  // const [techs, setTechs] = useState([]);
  const [queryText, setQueryText] = useState('');

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
      console.log(techList);
    });
  }, [projects]);

  // useEffect(() => {
  //   let techList = [];
  //   projects.map((project) => {
  //     return project['langs'].map((l) => {
  //       return techList.push(...l);
  //     });
  //   });
  //   setTechs(techList);
  // });

  const searchProject = (text) => {
    setQueryText(text);
  };

  let filteredProjects = projects;
  filteredProjects = filteredProjects.filter((project) => {
    return project['name'].toLowerCase().includes(queryText.toLowerCase());
  });

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
        {filteredProjects.map((project, key) => (
          <ProjectsCard key={key}>
            <ProjectsAdditional>
              <ProjectTitle>{project.name}</ProjectTitle>
              <ProjectsMoreInfo>
                <ProjectsIcon
                  src={require(`../../images/projects/${project.img}`)?.default}
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
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
