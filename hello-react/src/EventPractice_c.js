import React, { Component } from 'react';

class EventPractice_c extends Component {
  state = {
    message: '',//변경 하고 싶은 값을 초기화
  }
  
  handleChange = (e) => {
    this.setState({
      message : e.target.value,
    })
  }
  
  handleClick = () => {
    alert(this.state.message);
    this.setState({
      message : '',
    })
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
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice_c;