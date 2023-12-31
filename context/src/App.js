import React from "react";
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColor from "./components/SelectColor";

const App = () => {
  return (
    // 컬러를 변경 해주고 싶은 경우 Provider를 쓰고 value 값을 설정 해주면 됨
    //   <ColorContext.Provider value={{ color: "red" }}>
    //     <div>
    //       <ColorBox />
    //     </div>
    //   </ColorContext.Provider>
    // );

    <ColorProvider>
      <div>
        <SelectColor />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
