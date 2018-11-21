import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/scrollBar.css'

const SideScrollBar = ({hashtags={rap:1},blogPostTitles=['aRandomPost']}) => {

  const renderHashTags = (tags) => {
    if(tags){
      return Object.keys(tags).map(keyHash => {
        return(
          <button className="pure-button" key={keyHash}>
            {`#${keyHash}:${tags[keyHash]}`}
          </button>
        )
      })}
    }

  const renderBlogPosts = (titles) => {
    if (titles) {
      return titles.map( title => {
        return (
          <button className="pure-button" key={title}>
            <Link to={`/blogPost/${title}`}> {title} </Link>
          </button>
        )
      })
    }
  }

  return (
    <div className="sideScrollBar">
      <div className="blogPostTitlesScrollBar">
        <h3> Pinned Blog Posts </h3>
        {renderBlogPosts(blogPostTitles)}
      </div>
      <div className="hashtagsScrollBar">
        <h3> Hashtags </h3>
        {renderHashTags(hashtags)}
      </div>
    </div>
  );
}


export default SideScrollBar;
