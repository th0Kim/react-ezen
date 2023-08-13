import React from "react";
import { ColorConsumer } from "../contexts/color";

const colors = ["red", "orange", "green", "purple", "black", "blue"];

const SelectColor = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {({ actions }) => (
          <div style={{ display: "flex" }}>
            {colors.map((color) => (
              <div
                key={color}
                style={{
                  background: color,
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                //왼쪽 마우스 클릭
                onClick={() => actions.setColor(color)}
                // 오른쪽 마우스 클릭
                onContextMenu={(e) => {
                  e.preventDefault(); //기본동작 취소 시킴
                  actions.setSubColor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};

export default SelectColor;
