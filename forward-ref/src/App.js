import "./App.css";
import { useRef } from "react";
import MyInput from "./components/Input";

function App() {
  const ref = useRef(null);

  function handleClick() {
    ref.current.focus();
  }

  return (
    <>
      <MyInput ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </>
  );
}

export default App;
