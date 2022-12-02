import "./App.css";
import ClassBind from "./ClassBind";
import SyntheticEvent from "./SyntheticEvent";
import NumberTest from "./NumberTest";
import Handler from "./ex/Handler_ex";
import HandlerSecond from "./ex/HandlerSecond";
import HandlerThird from "./ex/HandlerThird";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />

      <hr />
      <NumberTest />

      <br />
      <hr />
      <ClassBind></ClassBind>
      <br />
      <hr />
      <Handler></Handler>

      <br />
      <hr />
      <HandlerSecond />

      <br />
      <hr />
      <HandlerThird></HandlerThird>
    </div>
  );
}

export default App;
