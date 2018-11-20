import React, { Component } from 'react';
import '../styles/home.css'

import BlogPostCard from './BlogPostCard'
import ScrollBar from './ScrollBar'
import Header from './Header'

class Home extends Component {

  render() {
    return (
      <div className="home">
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

export default Home;
