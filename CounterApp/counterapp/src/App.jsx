import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{count}</h2>
      <div className="btns">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="btn"
        >
          Add
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
          className="btn"
        >
          less
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
          className="btn"
        >
          reset
        </button>
      </div>
    </>
  );
}

export default App;
