// Teacher.js
import { Person } from './Person.js';

export class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  teach() {
    return `${this.name} teaches ${this.subject}.`;
  }
}