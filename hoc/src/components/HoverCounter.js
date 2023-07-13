import React from "react";
import withCounter from "./WithCounter";

function HoverCounter(props) {
  const { counter, increment } = props;

  return (
    <div>
      <button onMouseOver={() => increment()}>+</button>
      <p>Value of counter is : {counter}</p>
    </div>
  );
}

export default withCounter(HoverCounter);
