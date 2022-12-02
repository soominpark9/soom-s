import PropTypes from "prop-types";
import book from "./book.JPG";
import "./Book.css";

const Food = (props) => {
  const { title, author, price, type } = props;

  return (
    <div>
      <div className="back">
        <p className="main">이번주 베스트셀러</p>
        <img src={book} />
        <h1>나의 하루는 4시 40분에 시작된다</h1>
        <h3>저자:김유진</h3>
        <h3>판매가: 13,500원</h3>
        <h3>구분:자기계발서</h3>
      </div>
    </div>
  );
};

Food.defaultProps = {
  food: "치킨",
};

export default Food;
