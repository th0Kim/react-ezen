// import { Fragment } from 'react';
import './App.css';

function App() {
  // return 메서드 안에서 쓸 수 있는 전역 변수 위치
  const name = "리액트";
  return (
    <>
    {/* <></>도 Fragment와 동일한 컨테이너로 사용 가능 */}
    
      <h1>Hello { name }</h1>
      <h2>난 소영쓰 !</h2>
    </>
  );
}

export default App;