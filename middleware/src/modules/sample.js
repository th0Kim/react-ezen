import { createAction, handleActions } from "redux-actions";
import * as api from "../lib/api";
import { put, call, takeLatest } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/loading";

// 액션 타입을 선언한다.
// 한 요청당 세개를 만들어야 한다.

// 액션 객체
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

export const getPost = createAction(GET_POST, (id) => id);
export const getUsers = createAction(GET_USERS);

function* getPostSaga(action) {
  yield put(startLoading(GET_POST));
  try {
    // call(호출하고 싶은 함수, payload)
    const post = yield call(api.getPost, action.payload);
    yield put({
      type: GET_POST_SUCCESS,
      payload: post.data, //api.getPost 에 해당하는 데이터 받아서 payload에 넣음
    });
  } catch (e) {
    yield put({
      type: GET_POST_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_POST));
}

function* getUsersSaga() {
  yield put(startLoading(GET_USERS));
  try {
    const users = yield call(api.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      payload: users.data,
    });
  } catch (e) {
    yield put({
      type: GET_USERS_FAILURE,
      payload: e,
      error: true,
    });
  }
  yield put(finishLoading(GET_USERS));
}

export function* sampleSage() {
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 처리하고 가장 마지막 실행된 작업만 수행한다.
  yield takeLatest(GET_POST, getPostSaga);
  yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState = {
  post: null, //기존에 데이터가 있기 때문에 초기화 해줌
  users: null, //기존에 데이터가 있기 때문에 초기화 해줌
};

//리팩토링 modules loading.js
const sample = handleActions(
  // 액션 객체
  {
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload, // 성공 했을 때만 payload
    }),
    //리팩토링 modules loading.js
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_POST: false, //요청 완료
    //   },
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    //리팩토링 modules loading.js
    // [GET_USERS_FAILURE]: (state, action) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: false, //요청 완료
    //   },
    // }),
  },
  initialState
);

export default sample;
