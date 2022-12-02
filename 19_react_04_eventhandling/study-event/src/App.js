import "./App.css";
import ClassBind from "./ClassBind";
import SyntheticEvent from "./SyntheticEvent";
import NumberTest from "./NumberTest";

function App() {
  return (
    <div className="App">
      <SyntheticEvent />

      <hr />
      <NumberTest />

      <br />
      <hr />
      <ClassBind></ClassBind>
    </div>
  );
}

export default App;
