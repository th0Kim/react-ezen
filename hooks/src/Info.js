import React, {useEffect, useState} from "react";

const Info = () => {
	//생성자
	const [name, setName] = useState('');
	const [nickName, setNickName] = useState('');

	useEffect(() => {
		console.log(`effect`);
		// console.log({
		// 	name,
		// 	nickName
		// });
    return () => {
      // cleanup
		  console.log(`cleanup`);
    };
    // console 결과 : effect(시작) cleanup(정리) effect(StrictMode)
	}, []);


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
