import React, { Component } from 'react';
import '../styles/screenForBP.css'

//importing components
import ScreenContent from './ScreenContent';
import ScreenComments from './ScreenComments';
import CommentBox from './CommentBox';

//importing Redux
import { AddComment } from '../redux/actions'

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
        <div className="screenContent">
          <ScreenContent />
        </div>
        <div className="clickToCommnet" ref={this.ref} onClick={this.magicCommentBox}> Comment
          <CommentBox addComment={this.props.AddComment}/>
        </div>
        <div className="screenComments">
          <ScreenComments />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) =>({
  blogPost: state.blogPosts[ownProps.match.params.postTitle]
})

const mapDispatchToProps = dispatch => ({
  AddComment: (theComment) => dispatch(AddComment(theComment))
})


export default ScreenForBP;
