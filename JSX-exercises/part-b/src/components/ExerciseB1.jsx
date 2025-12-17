import React from "react";

function ExerciseB1() {
  const handleClick = () => alert("Hello");

  return (
    <div className="header">
      <h1 onClick={handleClick}>Welcome</h1>
    </div>
  );
}

export default ExerciseB1;
