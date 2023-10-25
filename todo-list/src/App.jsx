import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState("");
  const addTodos = () => {
    setTodos([...todos, user]);
  };
  return (
    <>
      <div style={{ fontSize: 40 }}>
        <h1>Todo List</h1>
        <input
          onChange={(e) => setUser(e.target.value)}
          style={{
            borderRadius: "35px ",
            margin: 10,
            fontSize: "18px",
            height: "30px",
          }}
          type="text"
        />
        <button
          onClick={addTodos}
          style={{
            borderRadius: "35px 10em",
            backgroundColor: "aliceblue",
            margin: 10,
            fontSize: "20px",
          }}
        >
          Add
        </button>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
