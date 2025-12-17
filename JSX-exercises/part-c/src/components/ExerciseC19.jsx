import React from "react";

function Access({ isAdmin }) {
  return (
    <div>
      {isAdmin ? <p>Welcome, admin!</p> : <p>Access denied</p>}
    </div>
  );
}

function ExerciseC19() {
  return <Access isAdmin={true} />;
}

export default ExerciseC19;
