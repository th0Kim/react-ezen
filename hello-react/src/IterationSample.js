import React, {useState} from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([// 초기값
		{id: 1, text: '눈사람'},// key value
		{id: 2, text: '얼음'},// key value
		{id: 3, text: '눈'},// key value
		{id: 4, text: '바람'},// key value
	])

	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5);

	const nameList = names.map((name) => (
		<li key={name.id} onDoubleClick={() => onRemove(name.id)}>
			{name.text}
		</li>
	));

	const onChange = e => setInputText(e.target.value);

	const onClick = () => {
		const nextNames = names.concat({
			id: nextId, 
			text: inputText
		});

		setNextId(nextId + 1); //추가 할 id가 1씩 증가
		setNames(nextNames);//추가 할 이름
		setInputText('');//추가 후 인풋 초기화
	}

	const onRemove = (id) => {
		const nextNames = names.filter((name) => name.id !== id);//id 빼기
		setNames(nextNames);//새로 업데이트
	}
	
  const onKeyPress = e => {
    if( e.key === 'Enter' ) {
      onClick();
    }
  }

  return (
		<>
			<input value={inputText} onChange={onChange} onKeyDown={onKeyPress}/>
			<button onClick={onClick}>추가</button>
			<ul>{nameList}</ul>
		</>
	);
};

export default IterationSample;
