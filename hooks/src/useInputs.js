import { useReducer } from "react";

function reducer(state, action) {
	return {
		...state,
		[action.name]:action.value
	}
}

export default function useInputs(initialForm){
	const [state, dispatch] = useReducer(reducer, initialForm);
	const onChange = (e) => {
		dispatch(e.target);
	}
  return [state, onChange];
}

//얘는 함수래..그래서 파일명 앞에 소문자임..암튼 그럼