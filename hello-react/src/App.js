import './App.css';

import React from 'react';
// import MyComponent from './MyComponent'; //함수형 lint 약어 rcc
import MyComponentC from './MyComponent_c'; //class형 lint 약어 rsc

const App = () => {
  return (
    <div>
      <MyComponentC name={'react'} favoriteNumber={1}>
        리액트 {/* App의 MyComponentC 자식 */}
      </MyComponentC>
    </div>
  );
}

export default App;