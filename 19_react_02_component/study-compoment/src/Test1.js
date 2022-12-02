import React from "react";

class ClassMyname extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  render() {
    const name = "soom";
    const my_style = {
      backgroundColor: "blue",
      fontSize: "40px",
      color: "orange",
      padding: "12px",
    };
    return (
      <>
        <div style={my_style}>{name}</div>
      </>
    );
  }
}
export default ClassMyname;
