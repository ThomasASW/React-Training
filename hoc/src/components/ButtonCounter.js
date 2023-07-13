import React from "react";
import withCounter from "./WithCounter";

function ButtonCounter(props) {
  const { counter, increment } = props;

  return (
    <div>
      <button onClick={() => increment()}>+</button>
      <p>Value of counter is : {counter}</p>
    </div>
  );
}

export default withCounter(ButtonCounter);
