import './App.css';

import React from 'react';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <div>
      <MyComponent name={3}>
        리액트 {/* App의 MyComponent 자식 */}
      </MyComponent>
    </div>
  );
}

export default App;

