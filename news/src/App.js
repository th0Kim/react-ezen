import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      //성공
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/1"
      ); //데이터를 get하고 response에 전달
      setData(response.data); //setData에 담기
    } catch (e) {
      //실패
      console.log(e);
    }
  };

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          row={7}
          value={JSON.stringify(data, null, 2)} //stringify 매서드를 통해서 JSON 객체로 데이터를 표현 해준다.
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
