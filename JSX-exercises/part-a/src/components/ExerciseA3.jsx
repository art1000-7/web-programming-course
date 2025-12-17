import React from "react";

const ExerciseA3 = () => {
  const name = "Nurlan";
  const age = 42;

  return React.createElement(
    "p",
    null,
    `${name} is ${age} years old.`
  );
};

export default ExerciseA3;
