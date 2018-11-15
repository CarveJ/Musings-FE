import React from 'react';
import '../styles/screenComments.css'

const ScreenComments = ({comments={SmartAss:"technically that's not correct"}}) => {

  const renderComment = () => {
    return Object.keys(comments).map(user => {
      return(
        <div>
          <div className="theComment">
            {comments[user]}
          </div>
          <span className="theUser">{user}</span>
        </div>
      )
    })
  }

  return (
    <div className="commentSection">
      {renderComment()}
    </div>
  );

}

export default ScreenComments;
