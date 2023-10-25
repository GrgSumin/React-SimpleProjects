import React from "react";
import { useState } from "react";
import Quotes from "./Quotes";

function App() {
  const [items, setItems] = useState([]);
  const fetchData = () => {
    return fetch("https://jsonguide.technologychannel.org/quotes.json")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      });
  };
  return (
    <>
      <button
        onClick={fetchData}
        style={{
          borderRadius: "35px 10em",
          backgroundColor: "aliceblue",
          margin: 10,
          fontSize: "20px",
          padding: "20px",
        }}
      >
        Fetch
      </button>
      {items.map((item, i) => (
        <Quotes key={i} from={item.from} text={item.text} />
      ))}
    </>
  );
}

export default App;
