import React, { Component } from 'react';

//homescreen views and imported Components
import BlogPostCard from './components/BlogPostCard'
import ScrollBar from './components/ScrollBar'
import Header from './components/Header'

//Screen for Blog Posts imported
import ScreenForBP from './components/ScreenForBP';

import './App.css';

class App extends Component {
  render() {
    return (
      <ScreenForBP/>
    );
  }
}

export default App;




// <div className="App">
// <div className="theHeader">
// <Header/>
// </div>
// <div className="theScrollBar">
// <ScrollBar/>
// </div>
// <div className="theBlogPostCards">
// <BlogPostCard/>
// </div>
// </div>
