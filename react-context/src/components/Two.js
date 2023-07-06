import React, { useContext } from "react";
import { PrefixContext } from "./One";
import Three from "./Three";

function Two() {
  const prefix = useContext(PrefixContext);
  return (
    <>
      <div>{prefix}two</div>
      <Three />
    </>
  );
}

export default Two;
