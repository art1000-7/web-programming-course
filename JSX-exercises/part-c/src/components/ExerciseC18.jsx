import React from "react";

const user = {
  name: "Aida",
  age: 19,
  group: "FE-01"
};

function UserProfile({ name, age, group }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Group: {group}</p>
    </div>
  );
}

function ExerciseC18() {
  return (
    <>
      {/* Using spread props */}
      <UserProfile {...user} />
      {/* Using explicit props */}
      <UserProfile name={user.name} age={user.age} group={user.group} />
    </>
  );
}

export default ExerciseC18;
