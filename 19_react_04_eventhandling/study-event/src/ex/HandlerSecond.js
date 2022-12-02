import { useState } from "react";

const HandlerSecond = () => {
  const [colorText, setColorText] = useState("검은색 글씨");
  const [color, setColor] = useState("black");

  return (
    <>
      <h2>
        <span style={{ color }}>{colorText}</span>
      </h2>
      <button
        onClick={() => {
          setColor("red");
          setColorText("빨간색 글씨");
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setColor("blue");
          setColorText("파란색 글씨");
        }}
      >
        파란색
      </button>
    </>
  );
};

export default HandlerSecond;
