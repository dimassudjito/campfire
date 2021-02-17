import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Post from './components/Post';
import Write from './components/Write';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/"><Post/></Route>
          <Route path="/write"><Write/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
