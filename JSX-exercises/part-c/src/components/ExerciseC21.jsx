import React from "react";

function HtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function ExerciseC21() {
  const html = "<p>This is <strong>bold</strong> text</p>";
  return <HtmlBlock html={html} />;
}

export default ExerciseC21;
