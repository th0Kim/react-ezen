import React from 'react';
import PropTypes from 'prop-types';//Javascript는 제약

const MyComponent = ({ name, children, favoriteNumber }) => {
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

//MyComponent 외부 제약

//Javascript는 제약
MyComponent.propTypes = {
  name: PropTypes.string, // string , number, object ...
  favoriteNumber : PropTypes.number.isRequired, //isRequired은 필수 입력 값
}

// 부모(App)에서 props 값을 받아올게 없는 경우 기본값 설정
MyComponent.defaultProps = {
  name: '기본이름',
}


export default MyComponent;
