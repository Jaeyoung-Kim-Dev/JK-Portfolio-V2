import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Blog from './pages/blog';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/blog' component={Blog} exact />
      </Switch>
    </Router>
  );
}

export default App;
