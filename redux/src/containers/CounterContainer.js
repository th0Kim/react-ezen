import { connect } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToprops = (state) => ({
  number: state.counter.number,
});

const mapDispatchRoProps = (dispatch) => ({
  increase: () => {
    console.log("increase");
  },
  decrease: () => {
    console.log("decrease");
  },
});

export default connect(mapStateToprops, mapDispatchRoProps)(CounterContainer);
