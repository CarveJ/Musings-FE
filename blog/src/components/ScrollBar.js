import React from 'react';
import '../styles/scrollBar.css'

const SideScrollBar = ({hashtags={rap:1},blogPostTitles=['aRandomTitle']}) => {

  const renderHashTags = (tags) => {
    if(tags){
      return Object.keys(tags).map(keyHash => {
        return(
          <button class="pure-button" key={keyHash}>
            {`#${keyHash}:${tags[keyHash]}`}
          </button>
        )
      })}
    }

  const renderBlogPosts = (titles) => {
    if(titles){
      return titles.map( title => {
        return (
          <button className="pure-button">
            {title}
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
