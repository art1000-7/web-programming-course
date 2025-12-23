// E2 – Logging vs Calculating
// The console.log is a side effect (impure), while the calculation x * 2 is pure.

// Pure function
function double(x) {
  return x * 2;
}

// Function with side effect
function logDouble(x) {
  console.log("Input is:", x);
  const result = double(x);
  console.log("Output is:", result);
  return result;
}

// Test
logDouble(5);