import { useState } from "react";
import "./App.css";

function App() {
  const [dicenumber, setDiceNumber] = useState(6);
  const rollDice = () => {
    const random = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(random);
  };
  return (
    <div>
      <div>
        <h1>This is a dice roller</h1>
        <img
          src={`${dicenumber}.png`}
          alt="dice"
          height="300px"
          width="300px"
        />
      </div>
      <button
        style={{
          backgroundColor: "skyblue",
          padding: 30,
          fontSize: 30,
          margin: 50,
          borderRadius: "105px 10em 10%",
          cursor: "pointer",
        }}
        className="btn"
        onClick={rollDice}
      >
        Roll
      </button>
    </div>
  );
}

export default App;
