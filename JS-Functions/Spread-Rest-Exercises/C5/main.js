// C5. Rest in Object Destructuring
const course = {
  code: "SE101",
  title: "Intro to Software Engineering",
  credits: 6,
  semester: "Fall",
  instructor: "Nurlan Shaidullaev"
};

const { code, title, ...details } = course;

console.log('Code:', code);
console.log('Title:', title);
console.log('Details:', details);