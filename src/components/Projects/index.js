import React, { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
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
    return (
      project['name'].toLowerCase().includes(queryText.toLowerCase()) ||
      project['detail'].toLowerCase().includes(queryText.toLowerCase())
    );
  });

  // debugger;

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectMenuWrapper>
        <ProjectFilterBtn>dd</ProjectFilterBtn>
        <ProjectSearchBar
          type={'text'}
          placeholder={'Search'}
          onChange={(e) => searchProject(e.target.value)}
        />
      </ProjectMenuWrapper>
      <ProjectsWrapper>
        {filteredProjects.map((project, key) => (
          <ProjectsCard key={key}>
            <ProjectsH2>{project.name}</ProjectsH2>
            <ProjectsIcon
              src={require(`../../images/projects/${project.img}`)?.default}
              alt={project.name}
            />
            <ProjectsP>{project.detail}</ProjectsP>
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
