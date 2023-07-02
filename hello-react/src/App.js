// import { Fragment } from 'react';
import './App.css';

function App() {
  // return 메서드 안에서 쓸 수 있는 전역 변수 위치
  const number = 0;
  return <div>{number && <h1>리액트입니다</h1>}</div>;
}

export default App;