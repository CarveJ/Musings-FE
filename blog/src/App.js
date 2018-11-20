import React, { Component } from 'react';

//homescreen views and imported Components
import Home from './components/Home'
//Screen for Blog Posts imported
import ScreenForBP from './components/ScreenForBP';
import { Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <Route path='/home' component={Home}/>
          <Route path='/blogPost/:postTitle' render={({match})=> < ScreenForBP />}/>
        </div>
    );
  }
}

export default App;
