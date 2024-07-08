import "./App.css";
import { useState } from "react";
import Counterab from "./components/Counterab.js";

function App() {
  const [CounterC, setCounterC] = useState(0);
  const [CounterABC, setCounterABC] = useState(0);
  const counterCClick = () => {
    setCounterC(CounterC + 100);
    setCounterABC(CounterABC + 100);
  };
  return (
    <div className="App">
      <div className="counterabc">
        <h1>Counter C</h1>
        <h1>{CounterABC}</h1>
        <Counterab setCounterABC={setCounterABC} CounterABC={CounterABC} />
        <div className="counterc">
          CounterC : {CounterC}
          <button onClick={counterCClick}>+100</button>
        </div>
        <button
          onClick={() => {
            setCounterABC(0);
            setCounterC(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
