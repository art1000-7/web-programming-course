import React from "react";

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

function ExerciseC11() {
  const tasks = [
    { id: 1, title: "Learn JSX" },
    { id: 2, title: "Write React components" },
    { id: 3, title: "Practice props and state" },
  ];

  return <TaskList tasks={tasks} />;
}

export default ExerciseC11;
