import './App.css';
import React, {useState} from "react";

import Counter from './Counter'; //useState
import CounterUseReducer from './Counter_useReducer'; //useReducer
import InfoUseReducer from './Info_useReducer'; //useReducer
import Info from './Info'; //useState
import Average from './Average'; //useState


const App = () => {
  const [visible, setVisible] = useState(false); // boolean이 되도록 false, true 상태로 초기화
  const [visible2, setVisible2] = useState(false); // boolean이 되도록 false, true 상태로 초기화

  return (
    <div>
      <Counter></Counter>
      <CounterUseReducer></CounterUseReducer>

      <h2>useState를 여러번 사용하기</h2>
      <button onClick={() => {setVisible(!visible);}}> {/* 클릭 할 때 마다 */}
        {visible ? '숨기기' : '보이기'}{/* visible이 true이면 버튼 문구가 '숨기기', false이면 '보이기' */}
      </button>
      <hr />
      { visible && <Info /> }{/* visible이 true이면 <Info/> 출력 */}
      

      <h2>useReducer를 여러번 사용하기</h2>
      <button onClick={() => {setVisible2(!visible2);}}> {/* 클릭 할 때 마다 */}
        {visible2 ? '숨기기' : '보이기'}{/* visible이 true이면 버튼 문구가 '숨기기', false이면 '보이기' */}
      </button>
      <hr />
      { visible2 && <InfoUseReducer /> }{/* visible이 true이면 <Info/> 출력 */}
    
      <h2>getAverage 평균값 구하기</h2>
      <Average></Average>
    </div>
  );
}

export default App;
