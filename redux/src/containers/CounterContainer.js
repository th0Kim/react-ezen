import { connect } from "react-redux";
import Counter from "../components/Counter"; //UI
import { decrease, increase } from "../modules/counter"; //모듈 연결의 변수 연결

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

const mapDispatchRoProps = (dispatch) => ({
  increase: () => {
    // modules counter.js 연결
    dispatch(increase());
  },
  decrease: () => {
    // modules counter.js 연결
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchRoProps)(CounterContainer);
