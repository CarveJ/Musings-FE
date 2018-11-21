import React, { Component } from 'react';

//homescreen views and imported Components
import Home from './components/Home'

//Screen for Blog Posts imported
import ScreenForBP from './components/ScreenForBP';
import { BrowserRouter as Router,Route, Link } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/blogPost/:postTitle' component={ScreenForBP}/>
        </div>
      </Router>
    );
  }
}

export default (App);
