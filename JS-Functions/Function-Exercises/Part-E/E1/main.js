// E1 – Refactor to Pure Function
// The given function is impure because it modifies an external variable 'total',
// which makes it have side effects and not predictable.

// Pure version
function addValues(a, b) {
  return a + b;
}

// Test
console.log(addValues(5, 3)); // 8