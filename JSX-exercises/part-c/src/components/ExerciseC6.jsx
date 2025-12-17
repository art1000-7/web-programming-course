import React from "react";

function ExerciseC6() {
  // Rewrite JSX using React.createElement
  const element = React.createElement(
    "div",
    { className: "card" },
    React.createElement("h2", null, "Profile"),
    React.createElement("p", null, "Welcome to your profile page.")
  );

  return element;
}

export default ExerciseC6;
