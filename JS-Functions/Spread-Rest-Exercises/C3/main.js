// C3. Rest Parameters – Sum & Avg
function sum(...nums) {
  return nums.reduce((acc, num) => acc + num, 0);
}

function average(...nums) {
  if (nums.length === 0) return NaN;
  return sum(...nums) / nums.length;
}

console.log('Sum of 1, 2, 3:', sum(1, 2, 3));
console.log('Average of 10, 20, 30, 40:', average(10, 20, 30, 40));
console.log('Average of no arguments:', average());