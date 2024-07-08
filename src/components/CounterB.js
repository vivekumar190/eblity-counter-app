import React, { useEffect, useState } from "react";
const CounterB = (props) => {
  const [CounterB, setCounterB] = useState(0);
  useEffect(() => {
    if (props.CounterABC === 0) {
      setCounterB(0);
    }
  }, [props.CounterABC]);
  return (
    <div className="counterb">
      Counter B {props.CounterABC == 0 ? 0 : CounterB}
      <button
        onClick={() => {
          setCounterB(CounterB + 10);
          props.setGROUPAB(props.abcount + 10);
          props.setCounterABC(props.CounterABC + 10);
        }}
      >
        + 10
      </button>
    </div>
  );
};

export default CounterB;
