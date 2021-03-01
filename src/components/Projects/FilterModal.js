import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Modal from 'react-modal';
import projects from './projects.json';
import { LangListWrapper, LangList } from './ProjectsElements';
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
    background: '#000',
  },
};

Modal.setAppElement('#root');

const FilterModal = (props) => {
  // const [filterLang, setFilterLang] = useState();
  const {
    setFilteredProjects,
    modalIsOpen,
    setIsOpen,
    filterLang,
    setFilterLang,
  } = props;

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

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'unset'; // allow scrolling once modal close
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   // subtitle.style.color = '#f00';
  // }

  // console.log({ filteredProjects });

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      closeTimeoutMS={300}
      contentLabel='Project Filter Modal'
    >
      <Zoom cascade>
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
      </Zoom>
    </Modal>
  );
};
export default FilterModal;
