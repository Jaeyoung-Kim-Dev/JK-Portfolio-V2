import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaSearch } from 'react-icons/fa';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsH2,
  ProjectsP,
  ProjectLangWrapper,
  ProjectLang,
  ProjectMenuWrapper,
  ProjectFilterBtn,
  ProjectSearchBar,
} from './ProjectsElements';

const Projects = () => {
  const [projects, setProjects] = useState(() => []);

  useEffect(() => {
    fetch('./JSON/projects.json')
      .then((response) => response.json())
      .then((result) => setProjects(result));
  }, []);

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectMenuWrapper>
        <ProjectFilterBtn>Filter</ProjectFilterBtn>
        <ProjectSearchBar type={'text'} placeholder={'Search'} />
      </ProjectMenuWrapper>
      <ProjectsWrapper>
        {projects.map((project, key) => (
          <ProjectsCard key={key}>
            <ProjectsH2>{project.name}</ProjectsH2>
            <ProjectsIcon
              src={require(`../../images/projects/${project.img}`)?.default}
              alt={project.name}
            />
            <ProjectsP>{project.desc}</ProjectsP>
            <ProjectLangWrapper>
              {project.langs.map((lang, langKey) => (
                <ProjectLang key={langKey}>{lang}</ProjectLang>
              ))}
            </ProjectLangWrapper>
            <a href={`${project.git}`}>
              <FaGithub />
            </a>
            <a href={`${project.link}`}>
              <FaExternalLinkAlt />
            </a>
          </ProjectsCard>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
