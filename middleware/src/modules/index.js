import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";
import loading from "./loading";
import { counterSage } from "./counter";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

//제너레이터 함수 생성
export function* rootSaga() {
  yield all([counterSage()]); //all 함수는 여러 사가를 합치기
}

export default rootReducer;
// import rootReducer from "./modules";
