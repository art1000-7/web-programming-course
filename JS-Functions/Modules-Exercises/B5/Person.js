// Person.js
export class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hi, I'm ${this.name}, ${this.age} years old.`;
  }
}