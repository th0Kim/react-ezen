import React, { Component } from 'react';

class EventPractice_c extends Component {
  state = {
    message: '',//변경 하고 싶은 값을 초기화
  }
  render() {
    return (
      <div>
        <h4>이벤트 연습</h4>
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}//초기값 ''
          onChange={(e) => {
            this.setState({//변경 함수
              message: e.target.value //input에 입력 한 내용이 value에 입력
            })
          }}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',//alert 띄우고 value 초기화 됨
            });
          }}>확인</button>
      </div>
    );
  }
}

export default EventPractice_c;