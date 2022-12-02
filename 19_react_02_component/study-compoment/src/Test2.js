import React from "react";
import happy from './happy.jpg'

class ClassPhoto extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  render() {
    const style = {
      fontSize: "40px",
      color: "orange",
      marginTop: "20px",
    };
    return (
      <>
        <div style={style}><h2>안녕하세요</h2>
        <img src={happy} /></div>
      </>
    );
  }
}
export default ClassPhoto;