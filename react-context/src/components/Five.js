import React, { useContext } from "react";
import { PrefixContext } from "./One";
import Six from "./Six";

function Five() {
  const prefix = useContext(PrefixContext);
  return (
    <>
      <div>{prefix}five</div>
      <Six />
    </>
  );
}

export default Five;
