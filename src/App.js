import React, { useState, useMemo, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProjectContext } from './ProjectContext';
import Home from './pages';
import projects from './components/Projects/projects.json';
// import Blog from './pages/blog';
import FilterModal from './components/Projects/FilterModal';

function App() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [filterLang, setFilterLang] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchField = useRef();
  const value = useMemo(
    () => ({
      filteredProjects,
      setFilteredProjects,
      filterLang,
      setFilterLang,
      isModalOpen,
      setIsModalOpen,
      searchField,
    }),
    [
      filteredProjects,
      setFilteredProjects,
      filterLang,
      setFilterLang,
      isModalOpen,
      setIsModalOpen,
      searchField,
    ]
  );
  return (
    <Router>
      <Switch>
        <ProjectContext.Provider value={value}>
          <Route path='/' component={Home} exact />
          <FilterModal />
        </ProjectContext.Provider>
        {/* <Route path='/blog' component={Blog} exact /> */}
      </Switch>
    </Router>
  );
}

export default App;
