import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import IdeaDisplay from './pages/IdeaDisplay';
import NavBar from './components/NavBar';
import IdeasPage from './pages/IdeasPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/ideas" component={IdeasPage} exact />
            <Route path="/idea/:id" component={IdeaDisplay} exact />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
