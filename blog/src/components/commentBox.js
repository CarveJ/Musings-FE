import React from 'react';

const CommentBox = ({onSubmit= f=>console.log(f)}) => (
  <div>
    <div className="theCommentBox">
      <input type="text" className="textArea">
      </input>
    </div>
  </div>
);

export default CommentBox;
