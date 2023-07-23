import React, { useReducer } from "react";

function reducer(state, action) {
	return {
		...state,//불변성 때문에 이전의 상태를 복사
		[action.name]:action.value//key값을 []로 하면 key 해당하는 value값을 인지 할 수 있다. ex) name="", value=""
		// action.name 은 name=""을 가르킴 
	}
}

const Info = () => {
	const [state, dispatch] = useReducer(reducer, {
		myname : '',
		nickname : ''
	});
	// [현재상태, 액션 발생시키는 함수] = useReducer(리듀서함수, 해당 리듀서의 기본값);

	const {myname, nickname} = state;//비구조할당문

	const onChange = (e) => {
		dispatch(e.target);
	}

  return (
		<div>
			<div>
				<input name="myname" value={myname} onChange={onChange} placeholder='이름' />
				<br/>
				<input  name="nickname" value={nickname} onChange={onChange} placeholder='닉네임' />
			</div>
			<div>
				<div><b>이름:</b> {myname}</div>
				<div><b>닉네임:</b> {nickname}</div>
			</div>
		</div>
	);
};

export default Info;
