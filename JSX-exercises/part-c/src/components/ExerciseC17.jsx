import React from "react";

function Card({ title, children }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </div>
  );
}

function ExerciseC17() {
  return (
    <Card title="JSX Topic">
      <p>We are learning JSX today.</p>
    </Card>
  );
}

export default ExerciseC17;
