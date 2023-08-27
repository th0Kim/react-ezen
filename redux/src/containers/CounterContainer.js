import { connect, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter"; //UI
import { decrease, increase } from "../modules/counter"; //모듈 연결의 변수 연결

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     // modules counter.js 연결
//     dispatch(increase());
//   },
//   decrease: () => {
//     // modules counter.js 연결
//     dispatch(decrease());
//   },
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// 줄 11 ~ 26 : 간소화 1
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) => ({
//     increase: () => {
//       dispatch(increase());
//     },
//     decrease: () => {
//       dispatch(decrease());
//     },
//   })
// )(CounterContainer);

// 줄 28 ~ 41 : 간소화 2
// export default connect(
//   // 상태
//   (state) => ({
//     number: state.counter.number,
//   }),
//   // 액션
//   { increase, decrease }
// )(CounterContainer);

import React, { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number); // connect함수를 쓰지 않고 useSelector Hooks를 사용한 방법으로 리덕스 상태 확인
  const dispatch = useDispatch(); // connect함수를 쓰지 않고 useDispatch Hooks를 사용한 방법으로 액션을 디스패치
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]); // onIncrease 객체를 사용하면 increase() 함수를 재사용(콜백함수) 한다. ,[dispatch]에 해당하는 내용이 업데이트
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]); // onDecrease 객체를 사용하면 decrease() 함수를 재사용(콜백함수) 한다. ,[dispatch]에 해당하는 내용이 업데이트
  // return (
  //   <Counter
  //     number={number}
  //     onIncrease={() => dispatch(increase())}//콜백을 쓰지 않고 useDispatch 만 쓰면 랜더링 할 때 마다 처음부터 함수 랜더링
  //     onDecrease={() => dispatch(decrease())}
  //   />
  // );
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
