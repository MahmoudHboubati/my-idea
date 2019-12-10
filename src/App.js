import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import IdeaDisplay from './pages/IdeaDisplay';
import NavBar from './components/NavBar';
import IdeasPage from './pages/IdeasPage';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/ideas" component={IdeasPage} exact />
        <Route path="/idea/:id" component={IdeaDisplay} exact />
      </div>
    </Router>
  );
}

export default App;
