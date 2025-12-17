import React from "react";

function CourseInfo({ title, credits }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>Credits: {credits}</p>
    </div>
  );
}

function ExerciseC8() {
  return <CourseInfo title="React Basics" credits={3} />;
}

export default ExerciseC8;
