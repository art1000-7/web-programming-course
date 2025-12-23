// C8. Combine Rest & Spread
function maxScore(first, ...rest) {
  if (first === undefined) return null; // or -Infinity
  return Math.max(first, ...rest);
}

console.log('Max of 10, 20, 30:', maxScore(10, 20, 30));
console.log('Max of single 5:', maxScore(5));
console.log('Max of no scores:', maxScore());