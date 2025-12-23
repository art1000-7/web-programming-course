// F1 – makeMultiplier
function makeMultiplier(n) {
  return function(x) {
    return x * n;
  };
}

// The inner function "remembers" n through closure - it has access to the scope where n was defined.

const double = makeMultiplier(2);
const triple = makeMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15