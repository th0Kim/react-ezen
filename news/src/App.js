import React, { useCallback, useState } from "react";
import Categories from "./components/Categories";
import NewsList from "./components/NewsList";

const App = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []); // 함수형 업데이트
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
