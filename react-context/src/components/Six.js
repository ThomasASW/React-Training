import React, { useContext } from "react";
import { PrefixContext } from "./One";

function Six() {
  const prefix = useContext(PrefixContext);
  return <div>{prefix}six</div>;
}

export default Six;
