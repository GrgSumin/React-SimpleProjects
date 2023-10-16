import React from "react";

function Button(props) {
  return (
    <div>
      <a href={props.link}>
        <button className="btn">{props.button}</button>
      </a>
    </div>
  );
}

export default Button;
