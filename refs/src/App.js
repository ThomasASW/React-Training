import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <div>
      <input ref={inputRef}></input>
      <button onClick={handleClick}>Click to focus</button>
    </div>
  );
}

export default App;
