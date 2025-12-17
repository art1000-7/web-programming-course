import React from "react";

function UserCard(props) {
  return (
    <div className="user-card">
      <h3>{props.name}</h3>
    </div>
  );
}

export default UserCard;
