import { useRef } from "react";
const RefSample1 = () => {
  //보통 input에 focus 만들때 ref를 가장 많이 사용한다 (기본)
  //1. ref 객체 만들기

  const inputRef = useRef();
  const handleFocus = () => {
    //3/ ref객체의 current 속성의 실제 요소를 가르킴
    console.log(inputRef.current);
    inputRef.current.focus();
    //input이라고 하는 요소에 focus가 저장이된다.
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
    //true로 해줘야 disabled가 활성화가 된다.
  };
  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클릭시 input focus 기능 구현</p>
      {/*2. 선택하고 싶은 HTML element에 ref prop 걸어주기 */}
      <input ref={inputRef} type="text" placeholder="Enter something" />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleDisabled}>DISABLED</button>
    </>
  );
};

export default RefSample1;
