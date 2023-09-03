// createRequestThunk(GET_POST, api.getPost);
import { finishLoading, startLoading } from "../modules/loading";

// createRequestThunk(GET_USERS, api.getUsers);
export default function createRequestThunk(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return (params) => async (dispatch) => {
    dispatch({ type });
    dispatch(startLoading(type)); // 로딩 시작
    try {
      const reponse = await request(params);
      dispatch({
        type: SUCCESS,
        payload: reponse.data,
      }); // 요청 성공
      dispatch(finishLoading(type)); // 로딩 끝
    } catch (e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      }); // 에러 발생
      dispatch(finishLoading(type)); // 로딩 끝
    }
  };
}
