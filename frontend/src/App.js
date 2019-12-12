import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import IdeasPage from './pages/IdeasPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="app-content">
        <Switch>
          <Route path="/" component={IdeasPage} exact />
          <Route path="/ideas" component={IdeasPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
