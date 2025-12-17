import React from "react";

function ExerciseC3() {
  const handleClick = () => alert("Hi");
  return (
    <div className="header">
      <h1 onClick={handleClick}>Click me</h1>
    </div>
  );
}

export default ExerciseC3;
