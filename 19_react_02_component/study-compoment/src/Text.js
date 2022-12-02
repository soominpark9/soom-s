import React from "react";
import PropTypes from "prop-types";

class ClassText extends React.Component {
  // 클래스형 컴포넌트 render() 필수
  render() {
    const { text, valid } = this.props;

    return (
      <>
        <h2>{text}</h2>
        <button onClick={valid}>콘솔메시지</button>
      </>
    );
  }
}

ClassText.defaultProps = {
  text: "이건 기본 text props 입니다."
};

ClassText.propTypes = {
  text: PropTypes.string.isRequired
};


export default ClassText;
