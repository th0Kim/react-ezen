import React from "react";
import { Navigate } from "react-router-dom";

const Mypage = () => {
  const isLoggedIn = false; //로그인 안한 상태 기준 고정

  //false 일 때
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>마이페이지</div>;
};

export default Mypage;
