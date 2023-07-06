import React, { useContext } from "react";
import { PrefixContext } from "./One";
import Four from "./Four";

function Three() {
  const prefix = useContext(PrefixContext);
  return (
    <>
      <div>{prefix}three</div>
      <Four />
    </>
  );
}

export default Three;
