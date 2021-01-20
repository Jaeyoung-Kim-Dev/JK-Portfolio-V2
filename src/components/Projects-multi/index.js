import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: { max: 1600, min: 1200 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    tabletSSmall: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
  };

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
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition='all .5'
          transitionDuration={500}
          containerClass='carousel-container'
          removeArrowOnDeviceType={['tablet', 'mobile']}
          deviceType='desktop'
          dotListClass='custom-dot-list-style'
          itemClass='carousel-item-padding-40-px'
          partialVisible={true}
        >
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
