import React from 'react';
import '../styles/blogPostCard.css'
import moment from 'moment'

const BlogPostCard = ({title='Attention Please',content='For everyone who mentions me',
  comments=[],hashtags='#rap',date=Date.now(), onClick= f=>console.log(f)}) => (
  <div className="BlogPostCard">
    <h2 className="cardTitle">{title}</h2>
    <h4 className="cardContent">{content}</h4>
    <div className="extras">
      <h6 className="cardComments"> Comments: {comments.length}</h6>
      <h6 className="cardHashtags"> {hashtags} </h6>
      <h6 className="cardDate"> {moment(date).format("MMM Do YY")} </h6>
    </div>
  </div>
);

export default BlogPostCard;
