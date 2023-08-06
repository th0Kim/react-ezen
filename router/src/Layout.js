import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  // Link 컴포넌트를 사용하지 않고 다른 페이지로 이동해야 하는 상황에서 사용하는 hook
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goAtricles = () => {
    navigate("/articles");
  };

  return (
    <div>
      <header
        style={{ backgroundColor: "cornflowerblue", padding: 16, fontSize: 24 }}
      >
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goAtricles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
