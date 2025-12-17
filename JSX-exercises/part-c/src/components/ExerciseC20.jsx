import React, { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}</p>
    </div>
  );
}

function ExerciseC20() {
  return <NameInput />;
}

export default ExerciseC20;
