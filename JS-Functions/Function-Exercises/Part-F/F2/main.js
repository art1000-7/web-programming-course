// F2 – createCounter
function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counterA = createCounter();
counterA(); // 1
counterA(); // 2

const counterB = createCounter();
counterB(); // 1