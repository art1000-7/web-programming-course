// Student.js
import { Person } from './Person.js';

export class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying in grade ${this.grade}.`;
  }
}