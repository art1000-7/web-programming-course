// C2 – sumAll with Rest Parameter
function sumAll(...nums) {
  return nums.reduce((sum, num) => sum + num, 0);
}

// Examples
console.log(sumAll(1, 2));            // 3
console.log(sumAll(1, 2, 3, 4, 5));   // 15
console.log(sumAll());                // 0