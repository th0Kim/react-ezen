import React, { Component } from 'react';
import './ValidationSample.css'

class ValidationSample_c extends Component {
  state = {//변화 처리 할 변수의 초기값
    password: '',
    clicked: false,
    validated: false,
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  handleButtonClick = () => {
    this.setState({
      clicked: true,//클릭 했으니 true로 변경되어 this.state.validated 구문 확인
      validated: this.state.password === '0000',
    })

    //콜백 함수
    this.refnaming.focus();// ref가 refnaming 갖는 곳에(=id와 비슷) 포커스 실행(커서 깜빡임)
  }

  render() {
    return (
      <div>
        <input 
          ref={(refnamed) => (this.refnaming = refnamed)}// input ref이름이 refnaming
          type="password"
          value={this.state.password}//handleChange 의해 값이 변경 된다.
          onChange={this.handleChange}
          className={this.state.clicked ? (this.state.validated ? 'success': 'failure'): ''}//클릭을 했는지 안했는지 유무 파악 후 value 값이 true/false인지 확인 한다.
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample_c;
