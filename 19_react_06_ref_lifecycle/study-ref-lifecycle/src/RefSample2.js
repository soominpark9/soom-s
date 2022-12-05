import { useRef, useState } from "react";

const RefSmaple2 = () => {
  // 1. ref 객체 만들기
  const id = useRef(1); // 기본 값 1 설정

  const plusId = () => {
    // 2. ref.current를 로컬 변수로 사용
    id.current += 1;
    //plus 누를때마다 값을 추가 하나씩 값 증가하게
    //     //여기서 state와의 차이점 화면에서 버튼을 누를때 state일 경우는
    //     // 이상황이면 숫자가 2,3,4,5, 이런식으로 올라갔다면 reft일때는
    //     //화면상에서는 올라가는게 보이지 않고 콘솔에만 보인다
    console.log(id.current);
  };

  /////////////////////////////////
  const [num, setNum] = useState(1);

  const plusNum = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h2>Ref: {id.current}</h2>
      <button onClick={plusId}>PLUS Ref</button>
      <h2>State: {num}</h2>
      <button onClick={plusNum}>PLUS Ref</button>
      {/* 같은 component에 있기 때문에 state버튼 누르다가 ref 누르고 다시 state누르면 reload되서 그제서야 ref가 새로운 숫자와 함께 랜더링 되는것을 볼 수 있다. */}
    </>
  );
};

export default RefSmaple2;
