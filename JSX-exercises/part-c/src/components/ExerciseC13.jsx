import React from "react";

function Clicker() {
  function handleClick() {
    console.log("Clicked!");
  }

  return <button onClick={handleClick}>Click me</button>;
}

function ExerciseC13() {
  return <Clicker />;
}

export default ExerciseC13;
