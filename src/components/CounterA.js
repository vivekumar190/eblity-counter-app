import React, { useEffect, useState } from "react";

const CounterA = (props) => {
  const [CounterA, setCounterA] = useState(0);
  useEffect(() => {
    if (props.CounterABC === 0) {
      setCounterA(0);
    }
  }, [props.CounterABC]);
  return (
    <div className="countera">
      CounterA {props.CounterABC == 0 ? 0 : CounterA}
      <button
        onClick={() => {
          setCounterA(CounterA + 1);
          props.setGROUPAB(props.abcount + 1);
          props.setCounterABC(props.CounterABC + 1);
        }}
      >
        + 1
      </button>
    </div>
  );
};

export default CounterA;
