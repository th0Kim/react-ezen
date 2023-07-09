# 20230702

### yarn : npm을 대체하는 패키지 관리자 도구 - npm은 프로젝트 버젼을 맞춰줘야 하는 단점

[설치]
npm install -global yarn
[설치 완료 확인]
yarn -v

### git bash : mac/window에서 통합으로 사용 가능

### react 초기 설치

yarn create react-app 프로젝트이름

### babel : es6 최신 소스를 es5로 다운그레이드 알아서 크로스브라우징 최적화 되도록 배포 해줌

### yarn start가 안될 때 컴퓨터 환경 수정 방법

1. 윈도우 찾기 > 시스템 환경 변수 편집 > 환경 변수
2. 사용자 변수 Path > 편집 > "npm path 복사"
3. 시스템 변수 Path > 편집 > 새로 만들기 > 위 복사한 npm path에 마지막에 \ 넣고 저장

### React 표기법

import 변수이름 form '연결 할 패키지';
class => className
{}중괄호는 변수를 넣을 때 씀

import { Fragment } from 'react';
<></>도 Fragment와 동일한 컨테이너로 사용 가능

return (
<>

<h1>Hello React</h1>
<h2>Hello React</h2>
</>
);

==

내용이 한 줄 일 때 표기
return <><h1>Hello React </h1></>

### js 테스트 사이트

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

### 조건부 연산자

name이 '리액트' 참 일 때 h1, 아닐때 h2 출력
{name === '리액트' ? <h1>리액트입니다</h1> : <h2>리액트가 아닙니다.</h2>}

name이 '리액트' 참 일 때 h1 출력
{name === '리액트' && <h1>리액트입니다</h1>}

const name = '리액트1'; 문자열이 거짓이기 때문에 출력 되지 않음
{name === '리액트' && <h1>리액트입니다</h1>}

const number = 0; 숫자 0은 코드에서 false 이기 때문에 숫자 0이 출력 됨
return <div>{number && <h1>리액트입니다</h1>}</div>;

const name = undefined; undefined 또는 '값이 ~입니다.'
return name || '값이 undefined입니다.'

null = 일부러 비워둔 것
undefined = 공간은 있으나 빈것(리액트에서는 에러로 침, 기본값이 존재 해야 함)
Boolean , typeof 확인 방법
let a;
console.log(Boolean(a)); //false
console.log(typeof a); //undefined

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하면 안된다.
만약 undefined이 꼭 필요한 경우 ||연산자를 사용하여 undefined 일때 사용할 값을 지정해 오류를 방지할 수 있다.
오류 방지 대응방법 1
function App() {
const name = undefined;
return name || '값이 undefined입니다.';
}

오류 방지 대응방법 2
function App() {
const name = undefined;
return <div>{name || '리액트'}</div>;
}

JSX 문법에서는 오류가 아님
function App() {
const name = undefined;
return <div>{name || '리액트'}</div>
}

잘못 된 undefined 처리 예시
function App() {
const name = undefined;
return name;
}

### 꼭 닫아야 하는 태그(self closing)

<input />

### .prettierrc

https://prettier.io/docs/en/options.html

{
"dubleQuote": true, // 큰 따옴표 택 1
"singleQuote": true, // 작은 따옴표 택 1
"semi": true, //세미콜론 자동 생성
"useTabs": false, //탭키 사용 여부
"tabWidth": 2 //탭 간격 2
}

settins가서
default formatter > prettier code format 변경
format on save > 체크


### RCC
import React, { Component } from 'react';

class App extends Component {
  
  render() {
    return <div></div>;
  }
}

export default App;

### RSC
import React from 'react';

const MyComponent = () => {
    return (
        <div>
            
        </div>
    );
};

export default MyComponent;

### Javascript의 인스턴스(Instance) ES5 : prototype
function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function(){
  console.log(this.name + ' : 멍멍');
}

const dog = new Dog('흰둥이');
dog.say();

### Javascript의 인스턴스(Instance) ES6 : class
class Dog{
  constructor(name){
    this.name = name;
  }
  say() {
    console.log(this.name + ' : 멍멍');
  }
  cute() {
    console.log(this.name + ' : 꺆');
  }
}

const dog = new Dog('바둑이');
const boy = new Dog('귀염둥이');
dog.say();
boy.cute();


### Javascript의 인스턴스(Instance) 
### function(){} , ()=> 차이
일반함수는 자신이 종속된 객체를 this로 가르키고 화살표함수는 자신이 종속된 인스턴스(new로 선언된)을 가르킨다.
function BlackDog(){
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: function() {
      console.log(this);
      console.log(this.name + ' : 멍멍');
    }
  }
}
const blackDog = new BlackDog();//new : Instance
blackDog.bark();//검둥이 : 멍멍

====> 보안상 일반 function은 window에 접근에 문제가 있어서 ()=> 함수가 나옴
function BlackDog(){
  this.name = '흰둥이';
  return {
    name: '검둥이',
    bark: ()=> {
      console.log(this);
      console.log(this.name + ' : 멍멍');//기존의 this.name을 가르킴
    }
  }
}
const whiteDog = new BlackDog();//new : Instance
whiteDog.bark();//흰둥이 : 멍멍

일반함수 


// React.StrictMode : 오래된 문법을 사용 시 에러가 나도록 만드는 모드
// 실제 배포시 지워야 함 : 문법 검사 목적만 있고, 실제 사용 시 dom 2번 실행 됨으로 불필요 함
<React.StrictMode>
  <App />
</React.StrictMode>


### 리액트 v16.8
함수 컴포넌트의 단점은 state와 라이프사이클 API의 사용이 불가능하다는 점인데 
이 단점은 리액트 v16.8버전으로 업데이트 이후 Hooks라는 기능이 도입이 되면서 해결되었다.
클래스형과 비슷하게 구현할 수 있다.
리액트 공식 매뉴얼에서는 컴포넌트를 새로 작성 할때는 함수 컴포넌트와 Hooks을 사용하도록 권장하고 있다.
하지만 그렇다고 해서 클래스형 컴포넌트가 사라지는 것은 아니므로 클래스형 컴포넌트 기능을 알아둬야 함


### Props(properties) 컴포넌트 속성을 설정할 때 사용하는 요소



------

# 20230709
부모(App)에서 props 값을 받아올게 없는 경우 기본값 설정
.defaultProps

App.js에서 컴포넌트 안에 일반 텍스트를 적을 경우 컴포넌트.js에 {props.children} 사용하여 출력 할 수 있음 
부모(App)의 MyComponent에 name이 없고 자식을 출력 {props.children}


### Javascript문법 중요! : destructuring = 구조분해할당
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

props 간소화 1 :반복되는 props를 const로 변수로 사용
const {name, children} = props;

props 간소화 2 :props 자리임으로 자리에 변수를 넣어서 간소화 함
const MyComponent = ({ name, children }) =>

### Javascript는 제약이 없어서 제한을 둬야 함, type을 지정해서 오류을 최소화 시킬 것
import PropTypes from 'prop-types';
name: PropTypes.string
이렇게 설정해 주면 name값은 무조건 문자열(string) 형태로 전달해야 된다는 것.

isRequired : 부모에서 컴포넌트에 넘길 props 필수 입력 값
favoriteNumber : PropTypes.number.isRequired


### component class형 제약 방법
외부 제약
내부 제약 static: class형에서만 있는 내부 제약 방법

### component 함수형 제약 방법
외부 제약 MyComponent.js > MyComponent.propTypes , MyComponent.defaultProps 참고