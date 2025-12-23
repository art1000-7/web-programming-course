// C3 – average with Rest + Guard
function average(...nums) {
  if (nums.length === 0) return null;
  return nums.reduce((sum, num) => sum + num, 0) / nums.length;
}

// Examples
console.log(average(10, 20, 30)); // 20
console.log(average());           // null