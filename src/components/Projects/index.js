import React, { useState, useRef } from 'react';
import { FaFilter } from 'react-icons/fa';
import Modal from 'react-modal';
import projects from './projects.json';
import FilterModal from './FilterModal';
import CarouselCard from './CarouselCard';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsP,
  ProjectsWrapper,
  ProjectMenuWrapper,
  ProjectFilterButtonWrapper,
  ProjectSearchWrapper,
  ProjectSearchBar,
  ProjectSearchIcon,
} from './ProjectsElements';
import './style.css';

Modal.setAppElement('#root');

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterLang, setFilterLang] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);
  const searchField = useRef();

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // prevent background scrolling when modal open
  }

  const searchProject = (text) => {
    setFilterLang('');
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

  return (
    <ProjectsContainer id='projects'>
      <ProjectsH1>PROJECTS</ProjectsH1>
      <ProjectMenuWrapper>
        <ProjectFilterButtonWrapper filterLang={filterLang} onClick={openModal}>
          <FaFilter /> {filterLang ? '' + filterLang : ' All'}
        </ProjectFilterButtonWrapper>
        <FilterModal
          setFilteredProjects={setFilteredProjects}
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          filterLang={filterLang}
          setFilterLang={setFilterLang}
          searchField={searchField}
        />
        <ProjectSearchWrapper>
          <ProjectSearchBar
            type={'text'}
            placeholder={'Search'}
            ref={searchField}
            onChange={(e) => searchProject(e.target.value)}
          />
          <ProjectSearchIcon />
        </ProjectSearchWrapper>
      </ProjectMenuWrapper>

      <ProjectsP>
        <span style={{ color: 'gold' }}>{filteredProjects.length}</span>{' '}
        Project(s) found and coming more!
      </ProjectsP>
      <ProjectsWrapper>
        <CarouselCard filteredProjects={filteredProjects} />
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
