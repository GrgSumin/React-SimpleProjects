import { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [previous, setPrevious] = useState("");

  const handleButton = (e) => {
    const resultValue = setResult(result.concat(e.target.name));
  };
  const backspace = () => {
    setResult(result.slice(0, result.length - 1));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Error");
    }
  };
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="current-operand">{result}</div>
      </div>
      <button onClick={clear} className="span-two" id="clear">
        AC
      </button>
      <button onClick={backspace} id="backspace">
        DEL
      </button>
      <button name="/" onClick={handleButton}>
        ÷
      </button>
      <button name="1" onClick={handleButton}>
        1
      </button>
      <button name="2" onClick={handleButton}>
        2
      </button>
      <button name="3" onClick={handleButton}>
        3
      </button>
      <button name="*" onClick={handleButton}>
        *
      </button>
      <button name="4" onClick={handleButton}>
        4
      </button>
      <button name="5" onClick={handleButton}>
        5
      </button>
      <button name="6" onClick={handleButton}>
        6
      </button>
      <button name="+" onClick={handleButton}>
        +
      </button>
      <button name="7" onClick={handleButton}>
        7
      </button>
      <button name="8" onClick={handleButton}>
        8
      </button>
      <button name="9" onClick={handleButton}>
        9
      </button>
      <button name="-" onClick={handleButton}>
        -
      </button>
      <button name="." onClick={handleButton}>
        .
      </button>
      <button name="0" onClick={handleButton}>
        0
      </button>
      <button onClick={calculate} id="result" className="span-two">
        =
      </button>
    </div>
  );
}

export default App;
