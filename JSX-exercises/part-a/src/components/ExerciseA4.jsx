import React from "react";

function Greeting({ name }) {
  return React.createElement(
    "div",
    { className: "greeting" },
    React.createElement("h1", null, `Hello, ${name}!`)
  );
}

export default Greeting;
