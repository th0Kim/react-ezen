import './App.css';

function App() {
  const name = '리액트';
  return (
    // 이 공간은 자바스크립트 공간입니다.
    /* 
    주석으로 처리하는 공간이
    여러줄로 되어 있으면
    주석이 달리 표현됩니다.
    */
    <div>
      <div className='react'>{name}</div>
      {/* 이 공간은 jsx문법 공간입니다. */}
    </div>
  );
}
export default App;