import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import projects from './projects.json';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsP,
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
  ProjectFilterButtonWrapper,
  ProjectSearchWrapper,
  ProjectSearchBar,
  ProjectSearchIcon,
  ProjectsMore,
  ProjectsLink,
  ProjectsIcon,
  LangListWrapper,
  LangList,
} from './ProjectsElements';
import './style.css';

let langs = ['React', 'Java', 'Node.JS']; // priority languages
projects.forEach((project) => {
  Array.prototype.push.apply(langs, project['langs']); //merge objects in array
  langs = [...new Set(langs)]; //remove duplicate elements
});
// console.log({ langs });

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterSwitch, setFilterSwitch] = useState(false);
  const [filterLang, setFilterLang] = useState();

  const searchProject = (text) => {
    text === ''
      ? setFilteredProjects(projects)
      : setFilteredProjects(
          projects.filter((project) => {
            console.log(project['langs']);
            // return project['name'].toLowerCase().includes(text.toLowerCase());
            return (
              project['name'].toLowerCase().includes(text.toLowerCase()) ||
              project['langs'].includes(text)
            );
          })
        );
  };

  const filterSwitchHandler = (filterSwitch) => {
    setFilterSwitch(!filterSwitch);
    if (filterSwitch) setFilteredProjects(projects);
  };

  const filterLangHandler = (lang) => {
    setFilterLang(lang);
    setFilteredProjects(
      projects.filter((project) => {
        return project['langs'].includes(lang);
      })
    );
  };

  // console.log({ filteredProjects });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 870, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1700, itemsToShow: 5, itemsToScroll: 5 },
  ];

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectMenuWrapper>
        <ProjectFilterButtonWrapper
          filterSwitch={filterSwitch}
          onClick={() => filterSwitchHandler(filterSwitch)}
        >
          <FaFilter />
        </ProjectFilterButtonWrapper>
        <ProjectSearchWrapper>
          <ProjectSearchBar
            type={'text'}
            placeholder={'Search'}
            onChange={(e) => searchProject(e.target.value)}
          />
          <ProjectSearchIcon />
        </ProjectSearchWrapper>
      </ProjectMenuWrapper>
      {filterSwitch ? (
        <Fade top cascade>
          <LangListWrapper>
            {langs.map((lang, key) => (
              <LangList
                key={key}
                filterLang={filterLang === lang}
                onClick={() => filterLangHandler(lang)}
              >
                {lang}
              </LangList>
            ))}
          </LangListWrapper>
        </Fade>
      ) : (
        ''
      )}
      <ProjectsP>
        <span style={{ color: 'gold' }}>{filteredProjects.length}</span>{' '}
        Project(s) found!
      </ProjectsP>
      <ProjectsWrapper>
        <Carousel
          breakPoints={breakPoints}
          showArrows={window.innerWidth > 480}
        >
          {filteredProjects.map((project, key) => (
            <Fade right>
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
                    src={
                      require(`../../images/projects/${project.img}`)?.default
                    }
                    alt={project.name}
                  />
                  <div>
                    {project.details.map((detail, detailKey) => (
                      <ProjectsDetails key={detailKey}>
                        {detail}
                      </ProjectsDetails>
                    ))}
                  </div>

                  {window.innerWidth > 480 ? (
                    <ProjectsMore>
                      Mouse over the CARD for more info
                    </ProjectsMore>
                  ) : (
                    <ProjectsMore>
                      Touch the card TITLE for more info
                    </ProjectsMore>
                  )}
                </ProjectsGeneral>
              </ProjectsCard>
            </Fade>
          ))}
        </Carousel>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
