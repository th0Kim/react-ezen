import React, { useState } from 'react';
// 함수형

const Say = () => {
  //message: 현재값, setMassage: 업데이트 할 값
  //useState('') 작은 따옴표는 string(문자열)
  const [message, setMassage] = useState(''); //class형에서 state 초기값, 업데이트값을 한 줄로 표현
  const onClickEnter = () => setMassage("hello~");
  const onClickLeave = () => setMassage("bye bye");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  )
};

export default Say;
