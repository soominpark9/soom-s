import { useState, useEffect } from "react";

//자식 component -> 여기에서만 사용할거라 내보내지 않음 export (x)
const MyComponent = (props) => {
  const { number } = props;
  const [text, setText] = useState("");

  useEffect(() => {
    //mount시점에 실행되는 것을 확인 새로고침하면 콘솔에 찍힘
    console.log("mount!!!");

    //함수를 리터나면
    //unmount 시점에서 실행된다
    //: effet 함수에서 함수를 리턴할 때는 unmount 시점에서 실행된다는 뜻
    return () => {
      console.log("X unmount!!");
    };
  }, []); //state(버튼)를 클릭해도 콘솔에 안찍힘 왜냐면 여기서 빈배열을 넣어줬기 때문에
  //딱 mounting될때만 콘솔에 찍힘!!
  //mount될때만 보기

  // Mount & Update 시점에 실행 (얘는 잘 안씀 ui환경에서 변경이 일어나는건 잦은일인데 계속 useEffect가 쓰이면 성능에 문제가 될수도있기 떄문에 보통은 mounting될 떄만? 혹은 특정 값을 넣어주면 update될떄 위주로만 쓰인다 unmount도 잘 안쓰이는듯?)
  useEffect(() => {
    console.log("update!!!");
    //자식 컴포넌트의 props가 update되서 리랜딩된다.
    //plus 버튼 누를떄마다 콘솔에 update가 찍힌다 + 첨시작했을떄 f5눌렀을 떄 기본적으로 mounting 되기 때문에 일단 콘솔에 찍히긴 한다.
  });

  // text가 바뀔때만 실행되도록!! (배열안에 특정 값을 넣어주면 배열안에 값이 쓰일때마다 update실행되도록)
  useEffect(() => {
    console.log('only text state update!!!>>>',text)
  }, [text]);


  return (
    <>
      <p>Mycomponent{number} </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};
//부모 component
const LifeCyleFunc = () => {
  const [number, setNumber] = useState(3);
  const [visible, setVisible] = useState(true);

  const changeNumberState = () => {
    setNumber(number + 1);
    //부모한텐 state였던게 자식한덴 props로 넘어가서 클릭할수록 숫자가 증가되고
    //클릭할때 마다 숫자가 리랜더링 되는것을 확인 할 수 있다.
  };
  const changeVisibleState = () => {
    setVisible(!visible);
  };
  // 버튼 2개일때 각각의 함수를 만들어줘서 보이고 안보이고 toggle기능을 할 수 있게 되었다.

  return (
    <>
      <h3>함수형 컴포넌트에서 LifeCycle 이해하기</h3>
      <button onClick={changeNumberState}>PLUS</button>
      <button onClick={changeVisibleState}>OnOff</button>
      {visible && <MyComponent number={number} />}
    </>
  );
};

export default LifeCyleFunc;
