import './App.css';

import React from 'react';
import MyComponent from './MyComponent'; //함수형 lint 약어 rcc
import MyComponentC from './MyComponent_c'; //class형 lint 약어 rsc
import CounterC from './Counter_c'; // state
import Say from './Say'; // useState
import EventPracticeC from './EventPractice_c'; // 이벤트 핸들링
import EventPractice from './EventPractice'; // 이벤트 핸들링
import ValidationSampleC from './ValidationSample_c'; // ref 예시
import RefSample from './RefSample'; // ref 예시
// import ScrollBoxC from './ScrollBox_c'; // Component scroll 접근 ref 예시
import IterationSample from './IterationSample'; // 함수형 반복 예시

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
      <CounterC></CounterC>
      
      <h3>함수형 + useState</h3>
      <Say></Say>


      <h3>Class형 + Event</h3>
      <EventPracticeC></EventPracticeC>

      <h3>함수형 + Event</h3>
      <EventPractice></EventPractice>


      <h3>ref + ValidationSample + createRef</h3>
      <ValidationSampleC></ValidationSampleC>
      
      <h3>ref + createRef</h3>
      <RefSample></RefSample>

      <h3>함수형 + 반복</h3>
      <IterationSample/>
    </div>
  );
}


// class App extends Component {
//   render() {
//     return(
//       <div>
//         <h3>Component + ref + 스크롤 박스 조작</h3>
//         <ScrollBoxC ref={(ref) => (this.sc = ref)}/>
//         <button onClick={() => this.sc.scrollTopBottom()}>맨 밑으로</button>
//       </div>
//     )
//   }
// }


export default App;