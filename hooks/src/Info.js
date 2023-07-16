import React, {useEffect, useState} from "react";

const Info = () => {
	//생성자
	const [name, setName] = useState('');
	const [nickName, setNickName] = useState('');

	useEffect(() => {
		console.log(`랜더링이 완료되었습니다.`);
		console.log({
			name,
			nickName
		});
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
