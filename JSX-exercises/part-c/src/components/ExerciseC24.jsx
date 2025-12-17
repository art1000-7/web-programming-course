import React from "react";

function Dashboard({ user, notifications }) {
  return (
    <div>
      <h1>{user.name}'s Dashboard</h1>
      {notifications.length > 0 && (
        <p>You have {notifications.length} new notifications.</p>
      )}
    </div>
  );
}

function ExerciseC24() {
  const user = { name: "Aida" };
  const notifications = [{ id: 1 }, { id: 2 }];
  return <Dashboard user={user} notifications={notifications} />;
}

export default ExerciseC24;
