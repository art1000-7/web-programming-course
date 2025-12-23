// D3 – filterPassing
function filterPassing(scores, isPassing) {
  return scores.filter(isPassing);
}

// Example
const scores = [95, 40, 76, 88, 55];

function isPassing(score) {
  return score >= 60;
}

const passed = filterPassing(scores, isPassing);
console.log(passed); // [95, 76, 88]