import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { createLogger } from "redux-logger";
//import loggerMiddleware from './lib/loggerMiddleware';
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
const logger = createLogger(); //redux-logger
const sagaMiddleware = createSagaMiddleware();

//스토어 생성
const store = createStore(
  rootReducer,
  // composeWithDevTools,
  // applyMiddleware(loggerMiddleware) //console로 확인 가능
  applyMiddleware(logger, ReduxThunk, sagaMiddleware) //redux-logger console로 확인 가능  //redux-thunk
);
sagaMiddleware.run(rootSaga);

root.render(
  // 공급자 Provider
  <Provider store={store}>
    <App />
  </Provider>
);
