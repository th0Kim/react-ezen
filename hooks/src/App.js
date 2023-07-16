import './App.css';
import React from 'react';

import Counter from './Counter'; //useState
import Info from './Info'; //useState


const App = () => {
  return (
    <div>
      <Counter></Counter>
      <Info></Info>
    </div>
  );
}

export default App;
