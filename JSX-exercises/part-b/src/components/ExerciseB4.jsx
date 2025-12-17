import React from "react";

function ExerciseB4({ isOnline }) {
  return (
    <div>
      {isOnline ? <p>User is online</p> : <p>User is offline</p>}
    </div>
  );
}

export default ExerciseB4;
