import { combineReducers } from "redux";
import counter, { counterSage } from "./counter";
import sample, { sampleSage } from "./sample";
import loading from "./loading";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  counter,
  sample,
  loading,
});

//제너레이터 함수 생성
export function* rootSaga() {
  yield all([counterSage(), sampleSage()]); //all 함수는 여러 사가를 합치기
}

export default rootReducer;
// import rootReducer from "./modules";
