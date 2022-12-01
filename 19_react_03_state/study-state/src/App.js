import './App.css';
import Counter from './Counter';
import CounterFunction from './CounterFunction';
import SayFunction from './SayFunction';
import CounterNum from './CounterNum';
import CounterFunNum from './CounterFunNum';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />

      <SayFunction />
      <hr />

      <CounterFunction value="일 더하기" />
      <hr />
      <CounterNum />
      <hr />

      <CounterFunNum />
    </div>
  );
}

export default App;