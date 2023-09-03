import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThumnk"; //리팩토링

// 액션 타입을 선언한다.
// 한 요청당 세개를 만들어야 한다.

// 액션 객체
const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
// const GET_POST_FAILURE = "sample/GET_POST_FAILURE"; //리팩토링

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
// const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE"; //리팩토링

//리팩토링 함수 불러오기 createRequestThunk.js
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// thunk 함수를 생성한다.
// thunk 함수 내부에서는 시작 할 때, 성공 할 때, 실패 했을 때 다른 액션을 디스패치한다.

// 액션 함수 -> lib/createRequestThumnk.js 으로 리팩토링
// export const getPost = (id) => async (dispatch) => {
//   dispatch({ type: GET_POST }); // 요청을 시작한 것을 알림
//   try {
//     const reponse = await api.getPost(id); //api에서 getPost의 id값을 잘 받아오면
//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: reponse.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생
//     throw e; //나중에 컴포넌트단에서 에러를 조회할 수 있게 해줌
//   }
// };

// export const getUsers = () => async (dispatch) => {
//   dispatch({ type: GET_USERS }); // 요청을 시작한 것을 알림
//   try {
//     const reponse = await api.getUsers();
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: reponse.data,
//     }); // 요청 성공
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     }); // 에러 발생
//     throw e; //나중에 컴포넌트단에서 에러를 조회할 수 있게 해줌
//   }
// };

// 초기 상태를 선언한다.
// 요청의 로딩 중 상태는 loading이라는 객체에서 관리한다.
const initialState = {
  //앱 실행 했을 때 화면이 멈춤듯한 흰색 화면 나와서 설정하는 값
  //리팩토링 modules loading.js
  // loading: {
  //   GET_POST: false,
  //   GET_USERS: false,
  // },
  post: null, //기존에 데이터가 있기 때문에 초기화 해줌
  users: null, //기존에 데이터가 있기 때문에 초기화 해줌
};

//리팩토링 modules loading.js
const sample = handleActions(
  // 액션 객체
  {
    //리팩토링 modules loading.js
    // [GET_POST]: (state) => ({
    //   ...state, //상태 복사 (불변성)
    //   loading: {
    //     ...state.loading, // 기존 상태에 따라 loading값을 변동되게 처리
    //     GET_POST: true, //요청 시작 - loading값 true로 변경
    //   },
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      // loading: {
      //   ...state.loading,
      //   GET_POST: false, //요청 완료 - loading이 멈추도록 false로 변경
      // },
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
    //리팩토링 modules loading.js
    // [GET_USERS]: (state) => ({
    //   ...state,
    //   loading: {
    //     ...state.loading,
    //     GET_USERS: true, //요청 시작
    //   },
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      //리팩토링 modules loading.js
      // loading: {
      //   ...state.loading,
      //   GET_USERS: false, //요청 완료- loading이 멈추도록 false로 변경
      // },
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
