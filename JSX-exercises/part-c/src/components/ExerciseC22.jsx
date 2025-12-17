import React from "react";

// Имя компонента должно быть с заглавной буквы
function ProfileCard(props) {
  return (
    <div className="profile-card">
      <h3>{props.name}</h3>
    </div>
  );
}

function ExerciseC22() {
  return <ProfileCard name="Aida" />;
}

export default ExerciseC22;
