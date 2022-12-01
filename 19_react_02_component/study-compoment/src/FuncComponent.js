import PropTypes from "prop-types";

const FuncComponent = (props) => {
  //   console.log(props); // {name: "xxx", key:value} 형식으로 계속 추가된다 props를 추가하면
  const { name, students } = props; //{name : "xxx"}
  const teacher = "숨";

  return (
    <div>
      <h1>Hi! {teacher}</h1>
      <p>여기는 Functional Component!!</p>
      <p>
        {name} 수업시간~!~!학생수는 {students}명이다!
      </p>
    </div>
  );
};

FuncComponent.defaultProps = {
  name: "얏호",
  students: 0,
};

FuncComponent.propTypes = {
  name: PropTypes.string,
  students: PropTypes.number.isRequired,
  //isRequired = 필수값
};

export default FuncComponent;
