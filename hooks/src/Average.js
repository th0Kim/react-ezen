import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
  console.log('평균값 계산 중..');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a,b) => a + b);//a:초기값, b:현재값
  return sum / numbers.length;
}

const Average = () => {
  const [list, setList] = useState([]);//초기화: 빈배열
  const [number, setNember] = useState('');

  const onChange = useCallback((e) => {
    setNember(e.target.value);
  },[])//컴포넌트가 처음 랜더링 될 때만 함수 생성 == 한번만 실행 이후 재사용

  const onInsert = useCallback(() => {//e객체 사용 안해서 비워도 됨
    const nextList = list.concat(parseInt(number));// parseInt() 숫자 형태로 변환하고 concat 사용하여 배열 사본 추가
    setList(nextList);// setList에 새로운 배열 nextList를 업데이트 해줌
    setNember('');
  }, [number, list]); //number 또는 list가 바뀌었을 때만 함수 생성

  //getAverage는 list가 달라졌을때만 호출되라(재사용)
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
        <b>평균값:</b>
        {avg}
      </div>
    </div>
  );
};

export default Average;