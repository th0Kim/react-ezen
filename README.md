<!-- prettier-ignore -->
# 20230702

### yarn : npm을 대체하는 패키지 관리자 도구 - npm은 프로젝트 버젼을 맞춰줘야 하는 단점

[설치]

```
npm install -global yarn
```

[설치 완료 확인]

```
yarn -v
```

### git bash : mac/window에서 통합으로 사용 가능

### react 초기 설치

yarn create react-app 프로젝트이름

### babel : es6 최신 소스를 es5로 다운그레이드 알아서 크로스브라우징 최적화 되도록 배포 해줌

### yarn start가 안될 때 컴퓨터 환경 수정 방법

1. 윈도우 찾기 > 시스템 환경 변수 편집 > 환경 변수
2. 사용자 변수 Path > 편집 > "npm path 복사"
3. 시스템 변수 Path > 편집 > 새로 만들기 > 위 복사한 npm path에 마지막에 \ 넣고 저장

### React 표기법

```
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
```

내용이 한 줄 일 때 표기

```
return <><h1>Hello React </h1></>
```

### js 테스트 사이트

https://jsbin.com/?html,output

es6 문법

```
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
```

### 조건부 연산자

```
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
```

리액트 컴포넌트에서는 함수에서 undefined만 반환하여 렌더링하면 안된다.
만약 undefined이 꼭 필요한 경우 ||연산자를 사용하여 undefined 일때 사용할 값을 지정해 오류를 방지할 수 있다.
오류 방지 대응방법 1

```
function App() {
  const name = undefined;
  return name || '값이 undefined입니다.';
}
```

오류 방지 대응방법 2

```
function App() {
  const name = undefined;
  return <div>{name || '리액트'}</div>;
}
```

JSX 문법에서는 오류가 아님

```
function App() {
  const name = undefined;
  return <div>{name || '리액트'}</div>
}
```

잘못 된 undefined 처리 예시

```
function App() {
  const name = undefined;
  return name;
}
```

### 꼭 닫아야 하는 태그(self closing)

```
<input />
```

### .prettierrc

https://prettier.io/docs/en/options.html

```
{
"dubleQuote": true, // 큰 따옴표 택 1
"singleQuote": true, // 작은 따옴표 택 1
"semi": true, //세미콜론 자동 생성
"useTabs": false, //탭키 사용 여부
"tabWidth": 2 //탭 간격 2
}
```

settins가서
default formatter > prettier code format 변경
format on save > 체크

### RCC

```
import React, { Component } from 'react';

class App extends Component {

  render() {
    return <div></div>;
  }
}

export default App;
```

### RSC

```
import React from 'react';

const MyComponent = () => {
    return (
        <div>

        </div>
    );
};

export default MyComponent;
```

### Javascript의 인스턴스(Instance) ES5 : prototype

```
function Dog(name) {
  this.name = name;
}

Dog.prototype.say = function(){
  console.log(this.name + ' : 멍멍');
}

const dog = new Dog('흰둥이');
dog.say();
```

### Javascript의 인스턴스(Instance) ES6 : class

```
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
```

### Javascript의 인스턴스(Instance) : 인스턴스는 복사해 온 객체

### function(){} , ()=> 차이

일반함수는 자신이 종속된 객체를 this로 가르키고 화살표함수는 자신이 종속된 인스턴스(new로 선언된)을 가르킨다.

```
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
```

====> 보안상 일반 function은 window에 접근에 문제가 있어서 ()=> 함수가 나옴

```
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
```

일반함수

// React.StrictMode : 오래된 문법을 사용 시 에러가 나도록 만드는 모드
// 실제 배포시 지워야 함 : 문법 검사 목적만 있고, 실제 사용 시 dom 2번 실행 됨으로 불필요 함

```
<React.StrictMode>
  <App />
</React.StrictMode>
```

### 리액트 v16.8

함수 컴포넌트의 단점은 state와 라이프사이클 API의 사용이 불가능하다는 점인데
이 단점은 리액트 v16.8버전으로 업데이트 이후 Hooks라는 기능이 도입이 되면서 해결되었다.
클래스형과 비슷하게 구현할 수 있다.
리액트 공식 매뉴얼에서는 컴포넌트를 새로 작성 할때는 함수 컴포넌트와 Hooks을 사용하도록 권장하고 있다.
하지만 그렇다고 해서 클래스형 컴포넌트가 사라지는 것은 아니므로 클래스형 컴포넌트 기능을 알아둬야 함

### Props(properties) 컴포넌트 속성을 설정할 때 사용하는 요소

---

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

### component 함수형 제약 방법

외부 제약 MyComponent.js > MyComponent.propTypes , MyComponent.defaultProps 참고

### component class형 제약 방법

외부 제약
내부 제약 static: class형에서만 있는 내부 제약 방법

#### state: 리액트에서 컴포넌트 내부에서 바뀔 수 있는 값

리액트에서 두 종류의 state가 있다. 하나는
클래스형 컴포넌트가 지닌 state,
함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state
prevState : 기존 상태
props : 현재 지니고 있는 props를 가르킨다
callbak함수 : 함수 실행 후 추가 함수 실행

##### state 주의 사항 :

클래스형 컴포넌트든 함수 컴포넌트든 state를 사용할 때 주의 해야 할 상입니다.
state 값을 바꿔야 할 때는 setState 혹은 useState를 통해 전달 받은 세터 함수를 사용해야 한다.

immutable : 처음에 생성된 값을 변경 되면 안된다는 불변객체(리액트 안에서 불변성의 규칙)
해결 방법 : 기존값을 사본을 새롭게 만들어 변경해 사용

예) 클래스 컴포넌트 잘못 된 코드

1. this.state.number 사용하여 직접적으로 처음값에 접근하여 값 변경 X

```
this.state.number = this.state.number + 1;
```

2. push함수 사용하여 처음값에 직접적으로 접근하여 값 변경 X

```
this.state.array = this.array.push(2);
```

3. 처음값에 직접적으로 접근하여 값 변경 X

```
this.stae.object.value = 5;
```

예) 수정 된 코드 :

1. ...object로 복사해서 새로운 연산자를 만든다

```
const object = {a:1, b:2, c:3};
const nexObj = {...object, b:4};//...: rest 연산자
console.log(nexObj); // a: 1, b: 4, c: 3
console.log(object); // a: 1, b: 2, c: 3
```

2. .push/.delete 대신 .concat/.filter를 사용해서 새로운 array사본으로 key:value을 추가/빼기 한다.

```
const array = [
  {id:1, value:true},
  {id:2, value:true},
  {id:3, value:false},
]
const nextArray = array.concat({id:4, value:true});// array를 새로 복사하고 key:value 추가해서 출력
const nextArray1 = nextArray.filter(item => item.id !== 3);// nextArray를 새로 복사하고 id가 3인 것만 빼고 출력
let nextArray2 = nextArray1.map(item => (item.id === 1) ? {...item, value:false} : item); // id가 1이면 ...item으로 복사하고 id 1의 value를 false로 바꿔서 출력 한다.
console.log(array);
console.log(nextArray);
console.log(nextArray1);
console.log(nextArray2);
```

예) 함수 컴포넌트 잘못 된 코드

```
const [object, setObject] = useState({a:1, b:2});
object.b = 3;
```

### Javascript문법 중요! : Arguments 객채 (rest 연산자, 스프레드 연산자)

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/arguments
var args = Array.from(arguments);
var args = [...arguments]; //배열 객체

### Javascript문법 중요! : Array.prototype.filter() 새로운 배열로 반환

Array.prototype 복사해서 filter를 쓸 수 있다. Array 객체 아니면 사용 X
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

### Javascript문법 중요! : Array.prototype.map()

함수를 호출한 결과를 모아 새로운 배열을 반환
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map

### Javascript문법 중요! : 조건식

if(조건식){true}else{false}
위 아래 같음
조건식 ? true : false

#### Array CRUD - 생성, 읽기, 수정, 삭제

#### 구조화

const array = [1,2];
const one = array[0];//1
const two = array[0];//2

#### 비구조화

const array = [1,2];
const [one,two] = array;

#### hooks

클래스형에서 아주 잘 만들어 놓은 함수를 함수 컴포넌트에서 hooks라고 한다.
hooks은 배열 비구조화 할당으로 되어 있다.

## 이벤트 핸들링

### 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성한다(onclick을 리액트에서 onClick으로 작성)
2. 이벤트에 실행 할 자바스크립트 코드를 전달 하는 것이 아니라 함수 형태의 값을 전달한다.
3. DOM 요소에만 이벤트를 설정 할 수 있다.
   (즉, div button input form span 등의 DOM요소에는 이벤트를 설정 할 수 있지만 우리가 직접 만든 컴포넌트에는 자체적으로 설정 할 수 없다.)
   예)
   <MyCompnent onClick={dosomething}/>과 같이 설정했다면
   MyCompnent를 클릭 할 때 dosomething 함수를 실행하는 것이 아닌, 그냥 이름만 onClick인 props를 MyCompnent에 전달해 줄 뿐이다.
   다만, 전달 받은 props를 컴포넌트 내부의 DOM이벤트로 설정 할 수는 있다.

```
<div onClick={this.props.onClick}>
{/* (...) */}
</div>
```

SyntheticBaseEvent : 초기화를 하고 이벤트 발생한 시점의 값을 가져옴

---

# 20230716

예) onKeyPress={this.handleClik}을 사용 했으나, 이후 리액트 버젼 영향으로 @deprecated 처리가 되었을 때 기능적 결함이 있을 수 있음.
ctrl + onKeyPress 클릭 시 index.d.ts 파일이 열리는데 여기서 사용 가능한 리액트 이벤트 목록이 열림
여기서 대체 할 수 있는 onKeyDown={this.handleClick}으로 변경하여 사용 할 수 있다.

### ref : id를 사용하는 목적과 동일하게 리액트내에서 요소의 이름을 지정 함.

reference의 약자. 전역적으로 작동하지 않고 컴포넌트 내부에서만 작동하기 때문에 리액트 컴포넌트 안에서도 id를 사용할 수 있지만 특수한 경우가 아니면 사용을 권장하지 않는다.

id는 전역적으로 사용 가능(보안에 취약하다는 뜻)

```
<div id="my-element"></div>
```

### DOM은 꼭 사용해야 하는 상황

1. 특정 input에 포커스 주기
2. 스크롤 박스 조작하기

3. 특정 input에 포커스 주기

   ### ref를 사용하는 방법 두가지

   1. 콜백함수를 통한 ref 설정

   ```
   <input ref={(ref) => {this.input=ref}} />
   ```

   2. creatRef(v16.3 도입으로 이전버전에서 작동하지 않음)
      ref를 설정해 준 DOM에 접근하려면 this.refnaming.current를 조회하면 된다. 콜백함수와 다른점은 뒷 부분에 .current를 넣어야 한다는 점.

   ###

4. 스크롤 박스 조작하기

   #### 리액트에서는 컴포넌트에도 ref를 달 수 있다.

   이 방법은 주로 컴포넌트 내부에 있는 dom을 컴포넌트 외부에서 사용 할 때 쓴다.

   ```
   <MyComponent ref={(ref) => {this.Mycomponent = ref}}>
   ```

   이렇게 하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근 할 수 있다.
   ex)
   MyComponent.input
   MyComponent.handleClick

   scrollTop : 세로 스크롤바 위치(0~350)
   scrollHeight : 스크롤이 있는 박스 안의 div 높이(650)
   clientHeight : 스크롤이 있는 박스의 높이(300)

   scrollHeight - clientHeight = scrollTop

### 반복 시키기 .map : 사용 시 key값을 필수로 쓸 것(index로 쓰면 안 됨)

```
const numbers = [1,2,3,4,5];
const processed = numbers.map(function(num) {
  return num * num;
})
// 화살표 함수 사용 시 코드
// const processed = numbers.map(num => num * num);

console.log(processed);
console.log(numbers);
```

#### 컴포넌트 반복(IterationSample.js)

유동적인 배열을 렌더링할 때 고유한 key값을 설정 해야 함
배열을 변형할 때 배열에 직접 접근하여 수정하는게 아니라, concat, filter 등의 배열 내장 함수를 사용하여 새로운 배열을 마든 후 이를 새로운 상태로 설정 해야 한다.

----- End of Hello-react

## Hooks (v16.8 이후) : 리액트 내장함수 use~

1. useState : 상태 관리의 가장 기본적인 hook
   -> 하나의 상태값만 관리 할 수 있다. 관리 할 상태가 여러개라면 useState를 여러번 사용한다.

2. useEffect : 리액트 컴포넌크가 랜더링 될 때 마다 특정 작업을 수행 하도록 설정 할 수 있는 hook
   -> 클래스형 컴포넌트의 componentDidMount와 componentDidUpate를 합친 형태로 봐도 무방하다.
   [리액트 라이프 사이클 - 생명주기: 시작 > 업데이트 > 제거]
   componentDidMount : 시작하다
   componentDidUpate : 업데이트

```
// (1) 시작 할 때와 업데이트 할 때 처리
	useEffect(() => {
		console.log({name, nickName});
	});

// (2) 시작 할 때 처리 : useEffect에서 설정한 함수를 컴포넌트가 화면에 맨 처음 랜더링 될 때만 실행하고, 업데이트 될 때는 실행하지 않으려면 함수의 두번째 파라미터에 '[]'(비어있는 배열)을 넣어준다. 성능에 도움이 된다.
	useEffect(() => {
		console.log({name, nickName});
	}, []);

// (3) 업데이트 할 때 처리 : 특정 값만 업데이트 될 때 실행
	useEffect(() => {
		console.log({name, nickName});
	}, [name]);
```

---

# 20230723

```
// 업데이트 만 할 수 있는 불편함
componentDidUpdate(prevProps, prevState) {
  if( prevProps.value !== this.props.value ) {
    doSomthing();
  }
}

```

### useEffect의 뒷정리 함수(cleanup)

컴포넌트가 어마운트 되기 전이나 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면 useEffect에서 뒷정리 함수를 반환 해줘야 한다.

```
useEffect(() => {
  // you effect

  return () => {
    // cleanup
  };
}, []);
```

### useReducer : useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 해줄 때

```
function reducer(state, action) {
  return{....} // 불변성을 지키면서 업데이트한 새로운 상태를 반환한다.
}
```

#### 리듀서는 현재 상태(초기값), 그리고 데이터 수정방법을 위해 필요한 정보를 담은 액션(action)값을 전달받아 새로운 상태를 반환하는 함수(규칙: 새로운 상태를 만들 때는 반드시 불변성을 지켜줘야 한다.)

https://www.w3schools.com/react/react_usereducer.asp

```
{
  type: 'INCREMENT', // 액션이름 : 다양한 상태 감소/증가 ...
  // 다른 값들이 필요하다면 추가로 들어감.
}
```

Javascript 함수 reduce() 비슷비슷 switch
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

useReducer의 첫번째 파라미터에는 리듀서 함수를 넣고
두번째 파라미터에는 해당 리듀서의 기본값을 넣어준다.
이 hook을 사용하면 state값과 dispatch 함수를 받아 오는데 여기서 state는 현재를 가르키고 있는 상태고 dispath는 액션을 발생시키는 함수이다.
dispatch(action)과 같은 형태로, 함수 안에 파라미터로 액션 값을 넣어주면 리듀서 함수가 호출 되는 구조이다.
dispatch()를 사용하면 html안에서 reducer함수를 동작시킬 수 있다.

#### useReducer 함수 규칙 참고

Counter_useReducer.js : 액션 이름 값(type)에 따른 상태 변경
Info_useReducer.js : 액션 key값에 따른 상태 변경

### useMemo : 함수 내부에서 발생하는 연산을 최적화 할 수 있다.

랜더링하는 과정에서 특정 값이 바뀌었을 때만 연산을 실행하고 원하는 값이 바뀌지 않았다면 이전에 연상했던 결과를 사용하는 방식.
숫자를 등록할 때 뿐만아니라 인풋내용이 수정될 때도 getAverage가 호출 되는 문제. 인풋내용이 바뀔 때는 평균값을 다시 계산 할 필요가 없음. 등록 버튼 누른 후 평균값을 계산 해도 됨.

### useCallback

랜더링 성능을 최적화해야 하는 상황에서 사용(함수 재사용)

### useRef(지역변수, DOM에 직접 접근할 수 있는 기능)

ref를 쉽게 사용할 수 있도록 해준다.

### 존재 하는 hook인지 만들어진건지 확인하기 : https://nikgraf.github.io/react-hooks/

----- End of hooks

## todo-app : 스케줄링 만들기

npm add sass classnames react-icons
sass : css전처리기로 스타일코드의 재활용성을 높여주고 코드의 가독성을 높여 유지보수를 쉽게 해줌
classnames : 조건부 스타일링
react-icons : svg형태로 이뤄진 다양하고 예쁜 아이콘 사용 가능하게 하는 라이브러리
https://react-icons.github.io/react-icons/icons?name=md

---

# 20230730

### className={cn('기본 클래스명', {변수} )} 조건식 클래스 부여
```
import cn from 'classnames';
```

#### react chrome 확장 프로그램에서 검색 후 설치
##### 웹사이트가 리액트로 개발되었는지 확인 가능
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?utm_source=ext_app_menu

youtube는 영상이 많음에도 리액트를 사용하지 않았는데, 
영상을 iframe으로 불러오기 때문이다. iframe은 텍스트로 인식되어 저용량으로 가져온다.

#### 컴포넌트가 리랜더링이 발생 할 때 
1. 자신이 전달받은 props가 변경 될 때
2. 자신의 state가 바뀔때
3. 부모 컴포넌트가 리랜더링 될 때
4. forceUpdate 함수가 실핼 될 때

컴포넌트의 리랜더링을 방지할 때 클래스형 컴포넌트에서는 
shouldComponentUpdate 라는 라이프사이클을 사용하면 된다.

React.memo함수를 사용하면 된다. 컴포넌트의 props가 바뀌지 않는다면 리랜더링하지 않도록 설정하여 
함수 컴포넌트의 리랜더링 성늘을 최적화 해줄 수 있다.

상호작용 시 함수가 계속 만들어지는 상황을 방지하는 방법 2가지
1. useState의 함수형 업데이트 기능을 사용하는 방법
새로운 상태를 파라미터로 넣지 않고, 상태 업데이트를 어떻게 할지 정의해 주는 업데이트 함수를 넣는 방식.
```
const [number, setNumber] = useState(0);
// prevNumbers는 현재 number 값을 가르킨다.
const onIncrease = userCallback(
  ()=> setNumber(
    prevNumber => prevNumber + 1
  ),
[])
```

2. useReducer를 사용하는 방법
```
// 원래 두번째 파라미터에 초기 상태를 넣어줘야 함.
// 두번째 파라미터에 undefined를 넣고,  
// 세번째에 초기 상태를 넣어주는 함수(createBulkTodos)를 넣으면, 컴포넌트 맨 처음 랜더링에만 함수(createBulkTodos) 호출 됨
const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
// 비어져 있는 상태(undefined)로 읽어 들여라. 한번 쫙 랜더링 되는 과정을 실행한다.

//dispatch는 action을 발생 시킴


```

기존 데이터를 수정할 때 직접 수정하지 않고(push) 새로운 배열을 만든 다음에 새로운 객체를 만들어서 필요한 부분을 교체해주는 방식으로 구현했다. 업데이트가 필요한 곳에서는 아예 새로운 배열 혹은 새로운 객체를 만들기 떄문에 React.memo를 사용했을 때 props가 변경이 있는지 알아내서 리랜더링 성능을 최적화 할 수 있다.
== 불변성이다..

arr가 nextArrBad으로 값이 덮어씌어짐
```
const arr = [0,1,2,3,4];
const nextArrBad = arr;
nextArrBad[0] = 100;
console.log(arr === nextArrBad); //true
```
nextArrGood[0]가 [..arr] 복사 해온 배열에 변경 되어 arr과 nextArrGood 사이의 차이가 생길 수 밖에 없다.(불변성)
```
const nextArrGood = [..arr];
nextArrGood[0] = 100;
console.log(arr === nextArrGood); //false
```

##### 실무데이터
```
const object ={
  foo:'bar',
  value:1
};

const nextObjectBad = object;
nextObjectBad.value = nextObjectBad.value+1;
console.log(object === nextObjectBad); 

const nextObjectGood = {
  ...object, 
  value : object.value + 1 
};
console.log(object === nextObjectGood);
```

객체 복사의 나쁜 예시
```
const todos =[{id:1, checked : true}, {id:2, checked:true}];
const nextTodos = [...todos]; //nextTodos 배열 복사

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]); 

nextTodos[0] = {
  ...nextTodos[0], //nextTodos의 객채 복사하여 값 변경
  checked:true
};
console.log(nextTodos[0]);
console.log(todos[0] === nextTodos[0]);
```
```
const complexObject ={};
const nextComplexObject ={
  ...complexObject,
  objectInside:{
  ...complexObject.objectInside,
  enabled:false
}
};
console.log(complexObject === nextComplexObject); 
console.log(complexObject.objectInside === nextComplexObject.objectInside); 
```

객체 복사에 활용하는 immer 라이브러리
배열 혹은 객채의 구조가 복잡해진다면 불변성을 유지하면서 업데이트하는 것이 까다로워진다.
그래서 이렇게 복잡한 상황 일 경우 immer 라이브러리의 도움을 받으면 편하게 작업 가능 함!!


#### react-virtualized를 사용하여 랜더링 최적화
현재 컴포넌트가 맨 처음 랜더링 될 때 2500개 컴포넌트 중 2491개 컴포넌트는 스크롤 하기 전 보이지 않음에도 렌더링이 이뤄진다.
리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 랜더링 하지않고 크기만 차지 하게끔 할 수 있다. 그리고 만약 스크롤되면 해당 스크롤 위치에서 보여줘야 할 컴포넌트를 자연스럽게 랜더링 시켜 낭비 되는 자원을 아낄 수 있다.

List 컴포넌트를 사용하기위해 rowRenderer라는 함수를 새로 작성한다.
이 함수는 react-virtualized의 List 컴포넌트에서 각 TodoItem을 렌더링 할 때 사용하며, 이 함수를 List 컴포넌트의 props로 설정해 주어야 한다.
이 함수는 파마리터에 index, key, style값을 객체 타입으로 받아와서 사용한다.
List 컴포넌트를 사용할 때는 해당 리스트의 전체 크기(width={512} height={513}), 각 항목의 높이(rowHeight={57}), 각 항목을 렌더링 할 때 사용해야 하는 함수(rowRenderer={rowRenderer}) 그리고 배열을 props(List={todos})로 널어줘야 한다. 그러면 이 컴포넌트가 전달 받은 props를 사용하여 자동 최적화 해준다.

----- End of todo-app

### immer 라이브러리
#### 이 라이브러리를 사용하면 구조가 복잡한 객체도 짧은 코드를 사용하여 불변성을 유지하면서 업데이트를 해줄 수 있다.

예시코드 
```
import { produce } from "immer";
const nextState = produce(originalState, draft => {
  //바꾸고 싶은 값 바꾸기
  draft.somewhere.deep.inside = 5;
})
```

immer 라이브러리에 있는 produce 함수는 두개 파라미터(매개변수)를 받는다.
첫번째 파라미터는 수정하고 싶은 상태, 
두번째 파라미터는 상태를 어떻게 업데이트 할 건지 정의.
두번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면 produce 함수가 불변성 유지를 대신해 주면서 새로운 상태로 생성해 준다.

이 라이브러리의 핵심은 불변성에 신경 쓰지 않은 것처럼 코드 작성했지만 불변성 관리를 제대로 해줌 짱짱!

#### draft : 상태를 바꾸는 함수를 draft에 적용해 불변성 유지, 새로운 상태를 리턴

originalState, draft의 역할 :
find, push, splice는 javascript로서 불변성을 지키지 못하여(기존값을 변경 시킴) 리액트에서는 사용 하면 안되지만, immer 라이브러리를 사용하면 자동으로 불변성을 originalState, draft 파라미터로 관리 해줌으로 사용 할 수 있게 되는 것이다.


# useState의 함수형 업데이트와 immer 함께 쓰기
예시 코드)
```
const [number, setNumber] = useState(0);
const onIncrease = useCallback(
  //prevNumber는 현재 number 값을 가르킨다.
  () => setNumber(prevNumber => prevNumber + 1),
  [],
);
```

예시 코드)
```
const update = produce(draft =>{
  draft.value = 2;
});
const originalState ={
  value:1,
  foo:'bar',
};
const nextState = update(originalState);
console.log(nextState); 
```
### 첫번째 파라미터(draft)가 함수 형태면 알아서 업데이트 함수를 반환한다.

----- End of immer



## SPA : single page application
페이지는 1개이고 html은 한번만 불러오며, 내용 업데이트가 필요하면 '그 부분'만 업데이트가 일어남(다른페이지로 이동한거 같은 착시..!)

### 라우터 기능
```
//설치
  npm add react-router-dom

// index.js에 router 연결
  import { BrowserRouter } from "react-router-dom";

// 적용
  <BrowserRouter>
    <App />
  </BrowserRouter>
```

### 라우터 사용 방법
사용자의 브라우저 주소 경로에 따라 우리가 원하는 컴포넌트를 보여주려면 Route 라는 컴포넌트를 통해 라우트 설정을 해줘야 한다.

```
<Routes>
  <Route path="주소 규칙" element={보여 줄 컴포넌트 JSX} />
</Routes>
```

#### Link 컴포넌트 
사용하면 페이지를 새로 불러오는 것을 막고 History API를 통해서 브라우저 주소의 경로만 바꾸는 기능이 내장되어 있다.
```
<Link to='경로'>링크 이름</Link>
```

#### URL 파라미터 예시 : 
주소의 경로에 유동적인 값을 넣는 형태
주로 ID 또는 이름을 사용하여 특정 데이터를 조회할 때 사용
예시) /profile/variable

#### 쿼리스트링(조건식) : 
뒷부분에 ?라는 문자열 이후에 key=value로 값을 정의하고 &연산자로 구분하는 형태
키워드 검색, 페이지네이션, 정렬방식 등 데이터 조회에 필요한 옵션을 전달 할 때
예시) articles?page=1&keyword=react

### useParams 사용방법

### useLocation 사용방법
- pathname : 현재 주소의 경로(쿼리스트링 제외)
- search: 맨앞의 ? 문자를 포함한 쿼리스트링 값
- hash : 주소의 # 문자열 뒤의 값(주로 History API가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅 사용할 때 쓰는 해시 라우터에서 사용한다.
- state : 페이지로 이동할 때 임의로 넣을 수 있는 상태 값
- key : location 객체의 고유값, 초기에는 default이며 페이지가 변경될 때 마다 고유의 값이 생성됨.

#### 파싱 예시)
?where=nexearch&sm=top_hty
이 문자열에서 앞에 있는 ?를 지우고
& 연산자로 분리한 뒤 key와 vaule를 파싱(구문을 분석)하는 작업을 진행해야 한다.

!useSearchParams
npm qs 또는 querystring 패키지를 설치해서 처리 할 수 있다.
리액트 라우터에서는 v6부터 useSearchParams라는 hook을 통해 쿼리스트링을 다룰 수 있다.

#### Outlet
Route(Articles)의 children으로 들어가는 jsx 엘리먼트를 보여주는 역할을 한다.
```
<Route path=":id" element={<Article />} />
```

```
<Route index element={<Home />} />
```
index prop을 사용하면 상위 라우트의 경로와 일치하지만 그 이후에 경로가 주어지지 않을 때 보여지는 라우터를 설정 할 수 있다.
path='/'와 동일한 역할을 하고 이를 좀더 명시적으로 표현하는 방법이다.

#### replace
페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않는다.
articles로 이동 했을 때 그 이전 페이지가 기록에 남지 않는다.

#### NavLink 
링크에서 사용하는 경로가 현재 라우트의 경로와 일치하는 경우 특정 스타일 또는 css클래스를 적용하는 컴포넌트이다.
예시 )
```
<NavLink style={({isActive}) => ( isActive? activeStyle : undefined )} />
```

#### NotFound.js
path="*" 와일트 카드 문자는 아무 텍스트를 매칭 하는 것으로 경로 외 주소는 404 처리 한다.
라우터 연결 위치는 항상 마지막이다.(위에 있는 라우터 경로를 매칭 하고도 없을 때)

#### Navigate
컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동을 하고 싶을 때
즉, 페이지를 리다이렉트하고 싶을 때


### javascript es6 객체 : promise
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
```
function increase(number){
  const promise = new Promise((resolve, reject)=>{//resolve: 성공, reject: 실패
  setTimeout(()=>{
    const result = number +10;
    if(result > 50 ){
      const e = new Error('NumberTooBig');
      return reject(e);
    }
    resolve(result); 
  },1000);
});
  return promise;
}

increase(0).then(number =>{
  console.log(number);
  return increase(number);
})
.then(number =>{
  console.log(number);
  return increase(number);
})
.then(number =>{
  console.log(number);
  return increase(number);
})
.then(number =>{
  console.log(number);
  return increase(number);
})
.then(number =>{
  console.log(number);
  return increase(number);
})
.catch(e =>{
  console.log(e);
});
```

### javascript es8 객체 (비동기) : async
```
function increase(number){
  const promise = new Promise((resolve, reject)=>{
   
  setTimeout(()=>{
    const result = number +10;
    if(result > 50 ){
      const e = new Error('NumberTooBig');//Error라는 객체가 존재함
      return reject(e);
    }
    resolve(result); 
  },1000);
});
  return promise;
}


async function runTasks(){//async 꼭 써줘야 promise 객체를 비동기로 가져옴
  try{//성공
    let result = await increase(0);//await 키워드로 받음
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
    result = await increase(result);
    console.log(result);
  }catch (e){//실패
    console.log(e);
  }
}

runTasks();
```

## API : 주고 받고

----- End of immer

---

# 20230813

### promise 기반(비동기) axios 설치
```
npm add axios
```
현재 가장 많이 사용되고 있는 자바스크립트 http 클라이언트이다.
이 라이브러리의 특징은 http 요청을 Promise 기반으로 처리한다는 점이다.

#### JSON.stringify() : 객체를 JSON 문자열로 변환
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

### UI 만들기
npm add styled-components

NewsItem.js : 각 뉴스 정보를 보여주는 컴포넌트(UI)
NewsList.js : API를 요청하고 뉴스 데이터가 들어 있는 배열 컴포넌트 배열로 변환하여 랜더링 해주는 컴포넌트

### 임시 이미지 적용해 볼 수 있는 url
160x160 이미지
https://via.placeholder.com/160

### a태그 rel="" html5이후 업데이트 된 보안 강화 속성
https://usingu.co.kr/frontend/html/rel%EC%86%8D%EC%84%B1%EC%9D%98-noopener-noreferrer-nofollow/
noopener/noreferrer : 현재 사이트에서 기록된 개인정보(세션)를 링크 이동시 함께 넘어가지 않도록 방지 한다.(ex. 검색 하지 않은 상품을 추천하는 경우를 방지)

#### .map 함수 사용 주의하여 null을 반환하는 구문을 세트로 사용한다.
배열을 map 함수를 사용하여 컴포넌트 배열로 변환할 때 !articles를 조회하여 해당 값이 현재 null이 아닌지 검사해야 한다. 이 작업을 하지 않으면 아직 데이터가 없을 때 null에는 map 함수가 없기 때문에 랜더링 과정에서 오류가 발생한다. 그래서 애플리케이션이 제대로 나타나지 않고 흰 페이지만 보이게 된다.
```
if (!articles) {
  return null;
}

{articles.map((article) => (
  <NewsItem key={article.url} article={article} />
))}

```

----- End of News

### Context API 
v16.3부터 많은 개선으로 사용하기 좋아짐

context : 전역으로 단 한번에 원하는 값을 받아와서 사용 할 수 있다.
색상을 props로 받아 오지 않고 ColorContext안에 있는 Consumer라는 컴포넌트를 통해 색상을 조회 
이러한 패턴을 Function as a child, Render Props 라고 한다.
```
<!-- Function as a child, Render Props -->
<ColorContext.Consumer>{(value) => (<div style={{width: "64px",height: "64px",background: value.color,}}/>)}</ColorContext.Consumer>
```
```
<div>결과 : {children(5)}</div>
<div>{value => 2*value}</div>
```

```
<!-- 변경 하고자 하는 값이 있는 경우 -->
<ColorContext.Provider value={{ color: "red" }}>
</ColorContext.Provider>

<!-- 변경 하고자 하는 값이 없는 경우 -->
<ColorContext></ColorContext>

<!-- 잘못 된 사용 방법 : 에러 뜸 -->
<ColorContext.Provider></ColorContext.Provider>
```

#### useContext : Consumer 대신 Hook을 사용한다.



## 리덕스...

1. 액션 : 상태가 어떠한 변화가 필요하면 액션(action)이란 것을 발생
액션은 하나의 객체로 표현되는데 액션 객체는 아래와 같은 형식으로 이루어져 있다.
```
{
  type: 'TOGGLE_VALUE'
}
```
여기서 타입은 액션 이름

그 외 값들은 나중에 상태 업데이트 할 때 참고해야 할 값으로 개발자가 마음대로 넣을 수 있다.
```
{
  type: 'AD_TODO',
  data: {
    id: 1,
    text: '리덕스 배우기'
  }
}
{
  type: 'CHANGE_INPUT',
  text: '안녕하세요'
}
```

2. 액션 생성 함수 :  액션 객체를 만들어 주는 함수
```
function addTodo(data) {
  return {
    type: 'ADD_TODO',
    data
  };
}
```

// 화살표 함수로도 만들 수 있다.
```
const changeInput = text => ({
  type: 'CHANGE_INPUT',
  text
})
```

3. 리듀서 : 변화를 일으키는 함수, 액션을 만들어서 발생시키면 리듀서가 현재 상태화 전달받은 액션 객체를 파라미터로 받아온다. 그리고 두 값을 참고하여 새로운 상태를 반환해준다.
```
const initialState={
  counter:1
};
function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT:
      return{
        counter:state.counter +1
      };
    default:
      return state;
  }
}
```

4. store(스토어) : 프로젝트에 리덕스를 적용하기 위해 스토어를 만든다. 한개의 프로젝트에는 단 하나의 스토어만 가질 수 있다. 스토어 안에는 현재 애플리케이션 상태화 리뉴서가 들어가 있으며 그 외에도 몇가지 중요한 내장함수를 지닌다. 

5. dispatch(디스패치) : 스토어의 내장함수 중 하나이다.
디스패치는 '액션을 발생 시키는 것'이라고 이해하면 된다.
이 함수는 dispatch(action)과 같은 형태로 액션 객체를 파라미터로 넣어서 호출한다.
이 함수가 호출되면 스토어는 리듀서 함수를 실행시켜서 새로운 상태를 만들어 준다.

6. subscribe(구독) : 스토어의 내장 함수 중 하나이다.
subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해주면 이 리스터 함수가 액션이 디스패치 되어 상태가 업데이트 될 때마다 호출된다.
```
const listener = () => {
  consloe.log('상태가 업데이트 됨');
}
const unsubscribe = store.subscribe(listener);
unsubscribe();
```

# 20230820

----- 이제까지는 CLI 환경에서 작업(npm creat react-app project)
- webpack 자동 설치 됨
- CLI는 프로젝트가 무거운 편
- 프로젝트 마다 다르게 CLI 또는 parcel 등으로 환경 셋팅 함


#### 리덕스 작업 시 환경 셋팅
- webpack 필요 하기 때문에 
- parcel 설치 필요(https://ko.parceljs.org/getting_started.html)
  > 간단한 프로젝트 목적으로 설치
  npm install -g parcel-bundler

  > 폴더 생성
  mkdir vanilla-redux

  > vanilla-redux 폴더로 이동
  cd vanilla-redux

  > parcel pakage json 생성
  npm add parcel-bundler

  > pakage.json 줄 5 ~ 16 설정 추가
  npm init -y

  > index.html , index.js 생성 후 parcel이 잘 작동 하는지 확인
  yarn parcel index.html

  > 리덕스 라이브러리 설치
  yarn add redux


### 리덕스 환경 Javascript 작성 : react 언어가 설치 안되어 있음으로 javascript 문법을 사용
1. DOM 노드를 가르키는 값 선언
2. 액션 선언(고유 해야 하기 때문에 대문자로 정하고, 중복되지 않도록 한다.)
3. 액션 생성 함수
4. 초기값 설정
5. 리듀서 추가