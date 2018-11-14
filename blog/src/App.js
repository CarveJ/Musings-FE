import React, { Component } from 'react';
import BlogPostCard from './components/BlogPostCard'
import ScrollBar from './components/ScrollBar'
import Header from './components/Header'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="theHeader">
          <Header/>
        </div>
        <div className="theScrollBar">
          <ScrollBar/>
        </div>
        <div className="theBlogPostCards">
          <BlogPostCard/>
        </div>
      </div>
    );
  }
}

export default App;
