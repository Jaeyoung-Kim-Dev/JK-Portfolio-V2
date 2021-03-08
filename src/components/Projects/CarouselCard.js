import React from 'react';
import Carousel from 'react-elastic-carousel';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import {
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
  ProjectTech,
  ProjectType,
  ProjectsMore,
  ProjectsLink,
  ProjectsIcon,
} from './ProjectsElements';
import './style.css';

Modal.setAppElement('#root');

const CarouselCard = (props) => {
  const { filteredProjects } = props;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2, itemsToScroll: 2 },
    { width: 870, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1700, itemsToShow: 5, itemsToScroll: 5 },
  ];

  console.log(filteredProjects);
  return (
    <Carousel breakPoints={breakPoints}>
      {filteredProjects.map((project, key) => (
        <Fade right>
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
                    {project.languages.map((language, langKey) => (
                      <ProjectLang key={langKey}>{language}</ProjectLang>
                    ))}
                  </ProjectLangWrapper>
                  {project.technologies.length ? (
                    <ProjectLangWrapper>
                      {project.technologies.map((technology, techKey) => (
                        <ProjectTech key={techKey}>{technology}</ProjectTech>
                      ))}
                    </ProjectLangWrapper>
                  ) : (
                    ''
                  )}
                </ProjectCoords>
                <ProjectStats>
                  <ProjectsLink
                    href={`${project.git}`}
                    rel='noreferrer'
                    target='_blank'
                  >
                    <FaGithub />
                  </ProjectsLink>
                  {project.link ? (
                    <ProjectsLink
                      href={`${project.link}`}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <FaExternalLinkAlt />
                    </ProjectsLink>
                  ) : (
                    ''
                  )}
                </ProjectStats>
              </ProjectsMoreInfo>
            </ProjectsAdditional>
            <ProjectsGeneral>
              <ProjectsIcon
                src={require(`../../images/projects/${project.img}`)?.default}
                alt={project.name}
              />
              <ProjectLangWrapper>
                {project.types.map((type, typeKey) => (
                  <ProjectType key={typeKey}>{type}</ProjectType>
                ))}
              </ProjectLangWrapper>
              <div>
                {project.details.map((detail, detailKey) => (
                  <ProjectsDetails key={detailKey}>{detail}</ProjectsDetails>
                ))}
              </div>
              <br />
              {window.innerWidth > 480 ? (
                <ProjectsMore>Mouse over the CARD for more info</ProjectsMore>
              ) : (
                <ProjectsMore>Touch the card TITLE for more info</ProjectsMore>
              )}
            </ProjectsGeneral>
          </ProjectsCard>
        </Fade>
      ))}
    </Carousel>
  );
};

export default CarouselCard;
