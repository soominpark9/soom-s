import "./Button.css";

const Button = (props) => {
  console.log(props);
  // const {link,childern} = props; -->구조 분해 할당을 하면 밑에 props.childern에서 props를 뺴도된다

  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <button className="Button">{props.children}</button>
    </a>
  );
};

Button.defaultProps = {
  children: "네이버",
  link: "https://naver.com",
};

export default Button;
