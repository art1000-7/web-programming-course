// A4. Inheritance: Person → Student / Teacher
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
  }
}

class Student extends Person {
  constructor(name, age, group) {
    super(name, age);
    this.group = group;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I study in group ${this.group}.`);
  }
}

class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I teach ${this.subject}.`);
  }
}

// Create one Student and one Teacher
const student = new Student("Aida", 20, "SE-101");
const teacher = new Teacher("Nurlan", 35, "Software Engineering");

student.introduce();
teacher.introduce();