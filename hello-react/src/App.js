import './App.css';

import React from 'react';
import MyComponent from './MyComponent'; //함수형 lint 약어 rcc
import MyComponentC from './MyComponent_c'; //class형 lint 약어 rsc
import Counter_c from './Counter_c'; // state

const App = () => {
  return (
    <div>
      <h3>함수형</h3>
      <MyComponent name={'react'} favoriteNumber={1}>
        리액트 {/* App의 MyComponent 자식 */}
      </MyComponent>

      <h3>Class형</h3>
      <MyComponentC name={'react'} favoriteNumber={3}>
        리액트 {/* App의 MyComponentC 자식 */}
      </MyComponentC>

      <h3>Class형 + state(내부에서 바뀔 수 있는 값)</h3>
      <Counter_c></Counter_c>
    </div>
  );
}

export default App;