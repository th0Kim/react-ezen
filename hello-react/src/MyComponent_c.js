// class형
import React, { Component } from 'react';
import PropTypes from 'prop-types';//Javascript는 제약

class MyComponent_c extends Component {
//MyComponent_c 내부 제약 내용

  //Javascript 제약
  static propTypes = {
    name: PropTypes.string, // string , number, object ...
    favoriteNumber : PropTypes.number.isRequired, //isRequired은 필수 입력 값
  }

  // 부모(App)에서 props 값을 받아올게 없는 경우 기본값 설정
  static defaultProps = {
    name: '기본이름',
  }


  render() {
    // class형은 props ()가 없어서 구조분해할당 방법으로 const 작성 해야 함
    const {name, children, favoriteNumber} = this.props;
    return (
      <div>
        {name} 컴포넌트
        <br />
        children 값은 {children}
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

// MyComponent_c 외부 제약 내용
  // MyComponent_c.propTypes = {
  //   name: PropTypes.string,
  //   favoriteNumber : PropTypes.number.isRequired,
  // }
  // MyComponent_c.defaultProps = {
  //   name: '기본이름',
  // }


export default MyComponent_c;
