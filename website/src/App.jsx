import React from "react";
import "./App.css";

import Button from "./Button";

const App = () => {
  return (
    <>
      <h1>hello this is ksi speaking</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt id,
        minima illo numquam harum doloremque aperiam? Cum, ipsum, sapiente nobis
        nesciunt rerum in et non quo minima facere dolores id.
      </p>
      <Button button="google" link="https://google.com" />
      <Button button="Facebook" link="https://facebook.com" />
    </>
  );
};

export default App;
