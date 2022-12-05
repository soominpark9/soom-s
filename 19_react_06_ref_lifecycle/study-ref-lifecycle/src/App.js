import "./App.css";
import RefSample1 from "./RefSample";
import RefSample2 from "./RefSample2";
import LifeCyleFunc from "./LifeCycleFunc";
import LifeCycleClass from "./LifeCycleClass";
import PostList from "./PostList";

function App() {
  return (
    <div className="App">
      <RefSample1 />
      <br />
      <hr />
      <RefSample2 /> 
      <hr />
      <LifeCyleFunc />
      <hr />
      <br />
      <LifeCycleClass/>

      <br />
      <hr />
      <PostList className="App"/>
    </div>
  );
}

export default App;
