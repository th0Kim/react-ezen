import React, { Component } from 'react';

class Counter_c extends Component {
  constructor(props) {
    super(props);//1. 부모로 부터 props 속성 값을 상속을 받아서
    this.state = { //2. 그 중에 this.state를 변화 시켜줄거고
      number: 0,//3. number만 변화를 주기 위한 초기값을 준다. 
      fixedNumber: 0,
    }
  }

  render() {
    const { number, fixedNumber } = this.state; // 초기값 0
    return (
      <div>
        <h4>{number}</h4>
        <h5>바뀌지 않는 값: {fixedNumber}</h5>
        <button onClick={() => {this.setState({ number: number + 1 });}}>{/* 4. this.setState 변화 함수 사용 시 초기값이 필요하여 number를 0으로 this.state로 초기값 선언 */}
          +1
        </button>
      </div>
    )
  }
}

export default Counter_c;
