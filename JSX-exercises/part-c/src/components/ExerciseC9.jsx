import React from "react";

function Status({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>;
}

function ExerciseC9() {
  return <Status isOnline={true} />;
}

export default ExerciseC9;
