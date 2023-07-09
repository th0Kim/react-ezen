import React, { useState } from 'react';
// 함수형

const Say = () => {
  //message: 현재값, setMassage: 업데이트 할 값
  //useState('') 작은 따옴표는 string(문자열)
  const [message, setMassage] = useState(''); //class형에서 state 초기값, 업데이트값을 한 줄로 표현
  const onClickEnter = () => setMassage("hello~");
  const onClickLeave = () => setMassage("bye bye");

  const [color, setColor] = useState('black'); //초기값

  return (
    <div>
      {/* JSX문법 */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>

      <h1 style={{ color }}>{message}</h1>{/* style 괄호 안 {}은 변수다, 초기값 'black */}

      {/* style={{ color: '컬러명' }} 은 단순 button 텍스트 컬러 */}
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>red</button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>green</button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>blue</button>
    </div>
  )
};

export default Say;
