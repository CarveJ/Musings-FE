import React, { Component } from 'react';
import '../styles/screenForBP.css'

//importing components
import ScreenContent from './ScreenContent';
import ScreenComments from './ScreenComments';
class ScreenForBP extends Component {

  render() {
    return (
      <div className="theScreenForBP">
        <div className="screenContent">
          <ScreenContent/>
        </div>
        <span className="clickToCommnet"> Comment </span>
        <div className="screenComments">
          <ScreenComments/>
        </div>
      </div>
    );
  }

}

export default ScreenForBP;
