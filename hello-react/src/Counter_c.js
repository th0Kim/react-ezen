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
        <button onClick={() => {
          // this.setState({number: number + 1});
          // this.setState((prev) => ({ number: prev.number + 1 }));
            this.setState({number: number + 1}, () => {//call back 함수
              console.log('방금 setState가 호출 되었습니다');
              console.log(this.state);
            })
          }}>
          +1
        </button>
      </div>
    )
  }
}

export default Counter_c;
