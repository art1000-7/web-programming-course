import React from "react";

function handleSelect(id) {
  console.log("Selected id:", id);
}

function ExerciseC14() {
  return <button onClick={() => handleSelect(5)}>Select student</button>;
}

export default ExerciseC14;
