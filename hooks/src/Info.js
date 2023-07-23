import React, {useEffect, useState} from "react";

const Info = () => {
	//생성자
	const [name, setName] = useState('');
	const [nickName, setNickName] = useState('');

	useEffect(() => {
		console.log(`effect`);
		console.log('update: ' + name);//시작 할 때 출력, 업데이트 값 넣으면 출력
    return () => {
			// cleanup
		  console.log(`cleanup`);//언마운트 되기 전에 출력
			console.log('prev: ' + name);//업데이트 하기 전 값 출력
    };
    // console 결과 : effect(시작) cleanup(정리) effect(StrictMode)
	}, [name]);


	const onChangeName = (e) => {
		setName(e.target.value);
	}

	const onChangeNickName = (e) => {
		setNickName(e.target.value);
	}

  return (
		<div>
			<div>
				<input value={name} onChange={onChangeName} placeholder='이름' />
				<br/>
				<input value={nickName} onChange={onChangeNickName} placeholder='닉네임' />
			</div>
			<div>
				<div><b>이름:</b> {name}</div>
				<div><b>닉네임:</b> {nickName}</div>
			</div>
		</div>
	);
};

export default Info;
