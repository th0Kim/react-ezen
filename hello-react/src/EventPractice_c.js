import React, { Component } from 'react';

class EventPractice_c extends Component {
  state = {//변경 하고 싶은 값을 초기화
    username: '',
    message: '',
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value,//input의 공통 구분 속성 name 값에 따라 각 value를 변경 해 줌
    })
  }
  
  handleClick = () => {
    alert(this.state.username + this.state.message);
    this.setState({//초기화
      username: '',
      message : '',
    })
  }

  handleKeyPress = (e) => {
    if ( e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    return (
      <div>
        <h4>이벤트 연습</h4>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}//초기값 ''
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요"
          value={this.state.message}//초기값 ''
          onChange={this.handleChange}
          onKeyDown={this.handleKeyPress}//input에 입력 후 엔터를 눌렀을 UI/UX 시각에서 "확인"버튼을 눌렀을 때와 동일한 동작이 되어야 함.
        />
        <button
          onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice_c;