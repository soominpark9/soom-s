import "./App.css";
import ClassComponent from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      {/* <ClassComponent></ClassComponent> */}
      <ClassComponent name="KDT 3기" num={3} students={100}/>
      <hr />
{/* 
      <FuncComponent />  속성없는 상태로 넘겨줘서 자꾸 콘솔 에러떠서 일단 주석*/}
      <FuncComponent name="KDT 3기" num={3} students={25} />
      <hr />

      <Button link='https://www.google.com'>구글</Button>
      <Button link='http://www.daum.net'>다음</Button>
      <Button></Button>
    </div>
  );
}

export default App;
