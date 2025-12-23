// A2. Constructor Function → Class
class Course {
  constructor(title, hours) {
    this.title = title;
    this.hours = hours;
  }

  describe() {
    console.log(`${this.title} – ${this.hours} hours`);
  }

  isLong() {
    return this.hours >= 60;
  }
}

// Test
const course1 = new Course("JavaScript Basics", 40);
const course2 = new Course("Advanced JS", 80);

course1.describe(); // JavaScript Basics – 40 hours
course2.describe(); // Advanced JS – 80 hours

console.log(course1.isLong()); // false
console.log(course2.isLong()); // true