// F3 – createIdGenerator
function createIdGenerator(prefix) {
  let current = 1;
  return function() {
    return `${prefix}-${current++}`;
  };
}

const genStudentId = createIdGenerator("STU");
console.log(genStudentId()); // "STU-1"
console.log(genStudentId()); // "STU-2"

const genCourseId = createIdGenerator("CRS");
console.log(genCourseId());  // "CRS-1"