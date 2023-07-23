import React, { useState, useMemo } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);//a:초기값, b:현재값
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);//초기화: 빈배열
  const [number, setNember] = useState('');

  const onChange = (e) => {
    setNember(e.target.value);
  }
  const onInsert = () => {//e객체 사용 안해서 비워도 됨
    const nextList = list.concat(parseInt(number));// parseInt() 숫자 형태로 변환하고 concat 사용하여 배열 사본 추가
    setList(nextList);// setList에 새로운 배열 nextList를 업데이트 해줌
    setNember('');
  }

  //getAverage는 list가 달라졌을때만 호출되고 list가 동일할때는 최초에 호출 결과를 계속해서 재사용
  const avg = useMemo(() => getAverage(list), [list]);//함수 재사용

  return (
    <div>
      <input value={number} onChange={onChange}/>
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>useMemo 평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;