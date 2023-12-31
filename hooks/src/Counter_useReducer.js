import React, { useReducer } from "react";

function reducer(state, action) {
	// action
	switch (action.type) {
		case 'INCREMENT':
			return { value: state.value + 1 };
		case 'DECREMENT' :
			return { value: state.value - 1 };
		default :
		  return state;
	}
}

const Counter = () => {
	const [state, dispatch] = useReducer(reducer, {value: 0});
  // [현재상태, 액션 발생시키는 함수] = useReducer(리듀서함수, 해당 리듀서의 기본값);
	
  return (
		<div>
			<p>
				현재 카운터 값은 <b>{state.value}</b>
			</p>
			<button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
			<button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
		</div>
	);
};

export default Counter;
