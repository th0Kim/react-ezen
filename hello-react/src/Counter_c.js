import React, { Component } from 'react';

class Counter_c extends Component {
  state = { // 초기값 설정은 state로 해준다
    number: 0,
    fixedNumber: 0,
  }

  render() {
    const { number, fixedNumber } = this.state; // 초기값 0
    return (
      <div>
        <h4>{number}</h4>
        <h5>바뀌지 않는 값: {fixedNumber}</h5>
        {/* this.setState을 사용해서 값을 변화 시켜준다 */}
        <button onClick={() => {
          //this.setState({number: number + 1}); //이전 값 없이 초기값 + 1 만 연산 한다.
          //prev : 이전 값을 저장 함으로 값을 누적하여 사용 할 수 있다.
          this.setState((prev) => ({ number: prev.number + 1 }));
          this.setState((prev) => ({ number: prev.number + 1 }));
          }}>
          +1
        </button>
      </div>
    )
  }
}

export default Counter_c;
