## 20230702
# yarn : npm을 대체하는 패키지 관리자 도구 - npm은 프로젝트 버젼을 맞춰줘야 하는 단점
[설치]
npm install -global yarn
[설치 완료 확인]
yarn -v

# git bash : mac/window에서 통합으로 사용 가능

# react 초기 설치
yarn create react-app 프로젝트이름

# babel : es6 최신 소스를 es5로 다운그레이드 알아서 크로스브라우징 최적화 되도록 배포 해줌

# yarn start가 안될 때 컴퓨터 환경 수정 방법
1. 윈도우 찾기 > 시스템 환경 변수 편집 > 환경 변수
2. 사용자 변수 Path > 편집 > "npm path 복사"
3. 시스템 변수 Path > 편집 > 새로 만들기 > 위 복사한 npm path에 마지막에 \ 넣고 저장

# React 표기법
import 변수이름 form '연결 할 패키지';
class => className
{}중괄호는 변수를 넣을 때 씀

import { Fragment } from 'react';
<></>도 Fragment와 동일한 컨테이너로 사용 가능

  return (
    <>
      <h1>Hello React </h1>
    </>
  );

# js 테스트 사이트 
https://jsbin.com/?html,output

es6 문법
const : 변 할 수 없는 변수 (이미 선언한 변수를 재정의 못함)
let : 변 할 수 있는 변수
  function myFunc(){
    let a = "hello";
  
    if(true) {
      let a = "bye";
      console.log('if ' + a);
    }
    console.log(a);
  }
  myFunc();

