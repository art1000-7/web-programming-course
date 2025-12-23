// C6. Immutable Updates with Spread (Objects)
const student = { id: 1, name: "Aida", group: "SE-101", gpa: 3.8 };

const updatedStudent = { ...student, gpa: 3.9 };

console.log('Original student:', student);
console.log('Updated student:', updatedStudent);
console.log('Original unchanged:', student.gpa === 3.8);