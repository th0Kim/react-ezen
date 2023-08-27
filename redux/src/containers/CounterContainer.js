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

import React from "react";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number); // connect함수를 쓰지 않고 useSelector Hooks를 사용한 방법으로 리덕스 상태 확인
  const dispatch = useDispatch(); // connect함수를 쓰지 않고 useDispatch Hooks를 사용한 방법으로 액션을 디스패치
  return (
    <Counter
      number={number}
      onIncrease={() => dispatch(increase())}
      onDecrease={() => dispatch(decrease())}
    />
  );
};

export default CounterContainer;
