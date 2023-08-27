import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "./modules";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import loggerMiddleware from "./lib/loggerMiddleware";
import { createLogger } from "redux-logger"; //redux-logger

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger(); //redux-logger
const store = legacy_createStore(
  rootReducer,
  // composeWithDevTools,
  // applyMiddleware(loggerMiddleware) //console로 확인 가능
  applyMiddleware(logger) //redux-logger console로 확인 가능
); //스토어 생성
root.render(
  // 공급자 Provider
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
