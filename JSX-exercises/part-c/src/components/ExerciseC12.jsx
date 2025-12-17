import React from "react";

const students = ["Ali", "Aida", "Nurlan"];

function StudentList() {
  return React.createElement(
    "ul",
    null,
    students.map((name, index) =>
      React.createElement("li", { key: index }, name)
    )
  );
}

function ExerciseC12() {
  return <StudentList />;
}

export default ExerciseC12;
