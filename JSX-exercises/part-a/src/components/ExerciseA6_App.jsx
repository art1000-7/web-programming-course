import React from "react";
import Button from "./ExerciseA6_Button";

function AppComponent() {
  return React.createElement(
    "div",
    { className: "app" },
    React.createElement("h1", null, "My App"),
    React.createElement(Button, { label: "Click me" })
  );
}

export default AppComponent;
