import './App.css';

import React, { Component } from 'react';
import ScrollBoxC from './ScrollBox_c'; // Component scroll 접근 ref 예시

class App extends Component {
  render() {
    return(
      <div>
        <h3>Component + ref + 스크롤 박스 조작</h3>
        <ScrollBoxC ref={(ref) => (this.ScrollBoxC = ref)}/>   
        <button onClick={() => this.ScrollBoxC.scrollTopBottom()}>맨 밑으로</button>
      </div>
    )
  }
}

export default App;