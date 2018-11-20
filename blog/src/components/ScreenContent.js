import React from 'react';
import '../styles/screenContent.css';

const ScreenContent = ({content="Some grade \"A\" bs as per"}) => (
  <div>
    <div className="theContent">
      { content }
    </div>
  </div>
);

export default ScreenContent;
