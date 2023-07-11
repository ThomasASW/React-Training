import React, { forwardRef } from "react";

const MyInput = forwardRef(function Input(props, ref) {
  return <input ref={ref} />;
});

export default MyInput;
