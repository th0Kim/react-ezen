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
          this.setState((prevState) => ({ number: prevState.number + 1 }));//prevState에 값을 저장해서 넘기는 역할
          this.setState((prevState) => ({ number: prevState.number + 1 }));
          }}>
          +1
        </button>
      </div>
    )
  }
}

export default Counter_c;
