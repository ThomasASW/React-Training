import React, { useState } from "react";

const withCounter = (Component) => {
  function UpdatedComponent() {
    const [counter, setCounter] = useState(0);
    return (
      <Component
        counter={counter}
        increment={() => setCounter((counter) => counter + 1)}
      />
    );
  }
  return UpdatedComponent;
};

export default withCounter;
