const Food = (props) => {
  const { food } = props;
  const style={
    color: "red",
  }
  return (
    <div>
      <h3>내가 좋아하는음식은 <span style={style}>{food}</span>입니다.</h3>
    </div>
  );
};

Food.defaultProps = {
  food: "치킨",
};

export default Food;
