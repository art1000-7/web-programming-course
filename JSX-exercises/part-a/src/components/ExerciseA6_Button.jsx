import React from "react";

function Button({ label }) {
  return React.createElement("button", { className: "btn" }, label);
}

export default Button;
