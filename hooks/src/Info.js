import React, {useState} from "react";

const Info = () => {
	const [name, setName] = useState('');//이름 상태 관리
	const [nickName, setNickName] = useState('');//닉네임 상태 관리

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
