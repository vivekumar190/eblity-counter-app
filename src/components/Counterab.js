import React, { useEffect, useState } from "react";
import CounterB from "./CounterB";
import CounterA from "./CounterA.js";

const Counterab = (props) => {
  const [abcount, setGROUPAB] = useState(0);
  useEffect(() => {
    if (props.CounterABC === 0) {
      setGROUPAB(0);
    }
  }, [props.CounterABC]);
  return (
    <div className="counerab">
      CounterGroup :Counter A + Counter B ={abcount}
      <CounterA
        setGROUPAB={setGROUPAB}
        abcount={abcount}
        setCounterABC={props.setCounterABC}
        CounterABC={props.CounterABC}
      />
      <CounterB
        setGROUPAB={setGROUPAB}
        abcount={abcount}
        setCounterABC={props.setCounterABC}
        CounterABC={props.CounterABC}
      />
    </div>
  );
};

export default Counterab;
