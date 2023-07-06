import React, { useContext } from "react";
import { PrefixContext } from "./One";
import Five from "./Five";

function Four() {
  const prefix = useContext(PrefixContext);
  return (
    <>
      <div>{prefix}four</div>
      <Five />
    </>
  );
}

export default Four;
