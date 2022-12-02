import { useState } from "react";

const SyntheticEvent = () => {
  // const printSyntheticEvent = (e) => console.log(e)
  const [text, setText] = useState("초기값");
  // text값은 계속 바뀌는거고 즉 상태가(state) 계속 바뀐다 그말은 계속 변화가 일어난다는건데
  // 그런 state를 관리하기 위해선 꼭 useState를 써야한다
  const setInputValue = (e) => setText(e.target.value);
  //   target은 event에 있는 속성 input 안에 target이있어서 그냥 e.value를 콘솔찍으면 undefined가 뜬다
  //   const printInputValue = (e) => console.log(e.target.value);
  //   원래는 console.log (e.target.value)였는데 setText로 바뀐이유는
  //   밑에서 input에 value값에 text를 넣었는데 아무곳에서 저장이안되고 콘솔로만 찍여져 나와서
  //   input text 상태를 변화하게 하려면 setText로 state를 바꾸고 저장해줘야한다. 그래서 바뀜

  const showAlert = () => {
    alert(`input 입력값은 ${text}!!!`);
    setText("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      showAlert();
    }
  };
  return (
    <div>
      <button onClick={(e) => console.log(e)}>SyntheticEvent 확인</button>
      {/* const printSyntheticEvent = (e) => console.log(e) 일 경우 
      <button onClick={printSyntheticEvent}> SyntheticEvent 확인</button> 으로 쓰면 됨 */}
      <br /> <br />
      <input
        type="text"
        placeholder="입력하세요"
        onChange={setInputValue}
        onKeyPress={onKeyPress}
        value={text}
      />
      <button onClick={showAlert}>버튼</button>
    </div>
  );
};

export default SyntheticEvent;
