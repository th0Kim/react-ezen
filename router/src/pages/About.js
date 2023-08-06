import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  // const location = useLocation();
  const [searchParams, setsearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setsearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setsearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개 합니다.</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      {/* <p>쿼리스트링 : {location.search}</p> */}
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode +1</button>
    </div>
  );
};

export default About;
