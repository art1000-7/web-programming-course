// stats.js
import * as math from './mathUtils.js';

export function sum(numbers) {
  return numbers.reduce((acc, num) => math.add(acc, num), 0);
}

export function average(numbers) {
  if (numbers.length === 0) return 0;
  return math.divide(sum(numbers), numbers.length);
}