import './App.css';

import React from 'react';
import MyComponentC from './MyComponent_c';

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

