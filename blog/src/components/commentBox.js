import React, { Component } from 'react';
import '../styles/commentBox.css'

class CommentBox extends Component {

  constructor(props){
    super(props)
    this.textInput = React.createRef()
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.state = {
      text:''
    }
  }

  handleChange(event){
    event.preventDefault()
    this.setState({text:event.value})
  }

  handleKeyUp(event){
    if(event.keyCode === 13){
      this.props.addComment(this.state.text)
    }
  }

  render() {
    return (
      <div>
        <div className="theCommentBox">
          <input type="text" value={this.state.text}
            onChange={this.handleChange} onKeyUp={this.handleKeyUp} id="textArea" className="textArea">
          </input>
        </div>
      </div>
    );
  }

}

export default CommentBox;
