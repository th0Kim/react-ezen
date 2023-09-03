import { createAction, handleActions } from "redux-actions";
import { delay, put, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined); //payload 자리에 (잘못된) 값이 들어가지 않도록 undefined 처리
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000); //1초 기다린다
  yield put(increase()); //특정 액션을 디스패치한다.
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSage() {
  // takeEvery는 들어오는 모든 액션에 대한 특정 작업을 처리해 준다.
  yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막 실행된 작업만 수행한다.
  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

// 초기 상태 정의
const initialState = 0;

//리듀서 with redux-action handleActions
const counter = handleActions(
  // 첫번째 매개변수 : 각 액션에 대한 업데이트 함수
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  // 첫번째 매개변수 : 초기 상태
  initialState
);

export default counter;
