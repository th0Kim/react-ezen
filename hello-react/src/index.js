import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode : 오래된 문법을 사용 시 에러가 나도록 만드는 모드
  // 실제 배포시 지워야 함 : 문법 검사 목적만 있고, 실제 사용 시 dom 2번 실행 됨으로 불필요 함
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
