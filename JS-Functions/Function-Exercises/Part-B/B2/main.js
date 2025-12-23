// B2 – Convert to Arrow Function
// Original function
function square(x) {
  return x * x;
}

// As function expression
const squareExpr = function(x) {
  return x * x;
};

// As arrow function (shortest syntax)
const squareArrow = x => x * x;

// Test
console.log(square(5));       // 25
console.log(squareExpr(5));   // 25
console.log(squareArrow(5));  // 25