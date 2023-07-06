import React from "react";
import Two from "./Two";

export const PrefixContext = React.createContext("Default");

function One() {
  return (
    <PrefixContext.Provider value="I'm ">
      <Two />
    </PrefixContext.Provider>
  );
}

export default One;
