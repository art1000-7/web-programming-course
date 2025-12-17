import React from "react";
import ExerciseB1 from "./components/ExerciseB1";
import ExerciseB2 from "./components/ExerciseB2";
import ExerciseB3 from "./components/ExerciseB3";
import ExerciseB4 from "./components/ExerciseB4";
import ExerciseB5 from "./components/ExerciseB5";
import ExerciseB6 from "./components/ExerciseB6";
import ExerciseB7 from "./components/ExerciseB7";
import ExerciseB8 from "./components/ExerciseB8";
import ExerciseB9 from "./components/ExerciseB9";
import ExerciseB10 from "./components/ExerciseB10";

function App() {
  return (
    <div>
      <h1>Part B – Fix JSX Errors</h1>
      <ExerciseB1 />
      <ExerciseB2 />
      <ExerciseB3 />
      <ExerciseB4 />
      <ExerciseB5 />
      <ExerciseB6 />
      <ExerciseB7 todos={[{id:1,text:"Task1"},{id:2,text:"Task2"}]} />
      <ExerciseB8 />
      <ExerciseB9 />
      <ExerciseB10 html={{ __html: "<strong>Safe HTML</strong>" }} />
    </div>
  );
}

export default App;
