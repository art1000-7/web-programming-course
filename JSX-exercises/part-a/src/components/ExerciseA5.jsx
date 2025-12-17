import React from "react";

const items = ["JSX", "Components", "Hooks"];

function TopicList() {
  return React.createElement(
    "ul",
    null,
    items.map((topic, index) =>
      React.createElement("li", { key: index }, topic)
    )
  );
}

export default TopicList;
