import React, { useState } from 'react';
// 함수형

const Say = () => {
  const [message, setMassage] = useState('');
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
