let fibonacciCache = {};
const fibonacci = (n) => {
  if (fibonacciCache[n]) {
    return fibonacciCache[n];
  }

  let value;
  if (n == 1) {
    value = 1;
  } else if (n == 2) {
    value = 1;
  } else {
    value = fibonacci(n - 1) + fibonacci(n - 2);
  }

  fibonacciCache[n] = value;
  return value;
}

for (let i = 1; i < 100; i++) {
  console.log(`${i} : ${fibonacci(i)}`);
}
console.log(fibonacciCache)