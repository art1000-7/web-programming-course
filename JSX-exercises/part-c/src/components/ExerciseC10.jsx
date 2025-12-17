import React from "react";

function Notification({ count }) {
  return (
    <div>
      <h2>Notifications</h2>
      {count > 0 && <p>You have {count} new notifications</p>}
    </div>
  );
}

function ExerciseC10() {
  return <Notification count={3} />;
}

export default ExerciseC10;
