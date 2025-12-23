// schoolApp.js
import { Person, Student, Teacher } from './models/index.js';

const person = new Person('John Doe', 30);
const student = new Student('Jane Smith', 20, '10th');
const teacher = new Teacher('Mr. Johnson', 45, 'Mathematics');

console.log(person.introduce());
console.log(student.introduce());
console.log(student.study());
console.log(teacher.introduce());
console.log(teacher.teach());