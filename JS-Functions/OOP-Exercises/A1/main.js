// A1. Object Literals → Class
class Student {
  constructor(firstName, lastName, group) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.group = group;
  }

  greet() {
    console.log(`Hi, I'm ${this.firstName} from ${this.group}`);
  }
}

// Create two instances and call greet()
const student1 = new Student("Aida", "Uulu", "SE-101");
const student2 = new Student("John", "Doe", "SE-102");

student1.greet();
student2.greet();