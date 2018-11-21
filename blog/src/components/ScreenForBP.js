import React, { Component } from 'react';
import '../styles/screenForBP.css'

//importing components
import ScreenContent from './ScreenContent';
import ScreenComments from './ScreenComments';
import CommentBox from './CommentBox';

//importing Redux
import { connect } from 'react-redux'
import { AddComment } from '../redux/actions'

//import react-router
import { Link, withRouter } from 'react-router-dom'

class ScreenForBP extends Component {

  constructor(props){
    super(props)
    this.ref = React.createRef()
    this.state = {
      toggleComment:false,
    }
  }


  render() {
    return (
      <div className="theScreenForBP">
        <button className="pure-button"> <Link to='/'> Back </Link> </button>
        <div className="screenContent">
          <ScreenContent content={ this.props.blogPost.content }/>
        </div>
        <div className="clickToCommnet" ref={this.ref} onClick={this.magicCommentBox}> Comment
          <CommentBox  addComment={ this.props.AddComment }/>
        </div>
        <div className="screenComments">
          <ScreenComments comments={ this.props.blogPost.comments } />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  blogPost: state.blogPosts[ownProps.match.params.postTitle]
})

const mapDispatchToProps = dispatch => ({
  AddComment: (theComment) => dispatch(AddComment(theComment))
})




export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps)(ScreenForBP));
