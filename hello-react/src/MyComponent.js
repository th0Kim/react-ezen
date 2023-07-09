import React from 'react';

const MyComponent = (props) => {
  return (
    <div>
      {props.name} 컴포넌트
      <br />
      children 값은 {props.children}
    </div>
  );
}

// 부모(App)에서 props 값을 받아올게 없는 경우 기본값 설정
MyComponent.defaultProps = {
  name: '기본이름',
}


export default MyComponent;
