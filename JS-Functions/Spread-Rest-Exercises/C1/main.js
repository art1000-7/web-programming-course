// C1. Spread with Arrays
const frontEnd = ["HTML", "CSS", "JavaScript"];
const backEnd = ["Node.js", "Express"];

const fullStack = [...frontEnd, ...backEnd];
console.log('Full Stack:', fullStack);

const withReact = ["React", ...frontEnd];
console.log('With React:', withReact);