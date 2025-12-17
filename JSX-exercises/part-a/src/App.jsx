import React from "react";
import ExerciseA1 from "./components/ExerciseA1";
import ExerciseA2 from "./components/ExerciseA2";
import ExerciseA3 from "./components/ExerciseA3";
import ExerciseA4 from "./components/ExerciseA4";
import ExerciseA5 from "./components/ExerciseA5";
import ExerciseA6_Button from "./components/ExerciseA6_Button";
import ExerciseA6_App from "./components/ExerciseA6_App";
import ExerciseA7 from "./components/ExerciseA7";
import ExerciseA8 from "./components/ExerciseA8";

function App() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Part A – Rewriting JSX"),
    React.createElement(ExerciseA1),
    React.createElement(ExerciseA2),
    React.createElement(ExerciseA3),
    React.createElement(ExerciseA4),
    React.createElement(ExerciseA5),
    React.createElement(ExerciseA6_Button),
    React.createElement(ExerciseA6_App),
    React.createElement(ExerciseA7),
    React.createElement(ExerciseA8)
  );
}

export default App;
