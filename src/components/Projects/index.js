import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { FaGithub, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
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

let types = [];
let languages = ['JavaScript', 'Java'];
let technologies = ['React', 'Node.JS']; // priority languages
projects.forEach((project) => {
  Array.prototype.push.apply(types, project['types']); //merge objects in array
  types = [...new Set(types)]; //remove duplicate elements
  Array.prototype.push.apply(languages, project['languages']); //merge objects in array
  languages = [...new Set(languages)]; //remove duplicate elements
  Array.prototype.push.apply(technologies, project['technologies']); //merge objects in array
  technologies = [...new Set(technologies)]; //remove duplicate elements
});

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    maxWidth: '600px',
  },
};

Modal.setAppElement('#root');

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
              project['types'].includes(text) ||
              project['languages'].includes(text) ||
              project['technologies'].includes(text)
            );
          })
        );
  };

  // const filterSwitchHandler = (filterSwitch) => {
  //   setFilterSwitch(!filterSwitch);
  //   if (filterSwitch) setFilteredProjects(projects);
  // };

  const filterLangHandler = (lang) => {
    setFilterLang(lang);
    closeModal(true);
    setFilteredProjects(
      projects.filter((project) => {
        return (
          project['types'].includes(lang) ||
          project['languages'].includes(lang) ||
          project['technologies'].includes(lang)
        );
      })
    );
  };

  var subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
          // onClick={() => filterSwitchHandler(filterSwitch)}
          onClick={openModal}
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
      {/* {filterSwitch ? ( */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Project Filter Modal'
      >
        <Fade top cascade>
          <LangListWrapper>
            {types.map((type, key) => (
              <LangList
                key={key}
                filterLang={filterLang === type}
                onClick={() => filterLangHandler(type)}
              >
                {type}
              </LangList>
            ))}
          </LangListWrapper>
          <LangListWrapper>
            {languages.map((language, key) => (
              <LangList
                key={key}
                filterLang={filterLang === language}
                onClick={() => filterLangHandler(language)}
              >
                {language}
              </LangList>
            ))}
          </LangListWrapper>
          <LangListWrapper>
            {technologies.map((lang, key) => (
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
      </Modal>
      {/* ) : (
        ''
      )} */}
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
                        {project.languages.map((language, langKey) => (
                          <ProjectLang key={langKey}>{language}</ProjectLang>
                        ))}
                      </ProjectLangWrapper>
                      <ProjectLangWrapper>
                        {project.technologies.map((technology, techKey) => (
                          <ProjectLang key={techKey}>{technology}</ProjectLang>
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
                  <ProjectLangWrapper>
                    {project.types.map((type, typeKey) => (
                      <ProjectLang key={typeKey}>{type}</ProjectLang>
                    ))}
                  </ProjectLangWrapper>
                  <div>
                    {project.details.map((detail, detailKey) => (
                      <ProjectsDetails key={detailKey}>
                        {detail}
                      </ProjectsDetails>
                    ))}
                  </div>
                  <br />
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
