// D2 – applyToArray
function applyToArray(arr, fn) {
  return arr.map(fn);
}

// Example
const numbers = [1, 2, 3];

function double(x) {
  return x * 2;
}

const result = applyToArray(numbers, double);
console.log(result); // [2, 4, 6]