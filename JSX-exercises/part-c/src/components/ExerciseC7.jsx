import React from "react";

function StudentCard(props) {
  return (
    <div className="student-card">
      <h3>{props.name}</h3>
      <p>Group: {props.group}</p>
    </div>
  );
}

function ExerciseC7() {
  return <StudentCard name="Nurlan" group="FE-01" />;
}

export default ExerciseC7;
