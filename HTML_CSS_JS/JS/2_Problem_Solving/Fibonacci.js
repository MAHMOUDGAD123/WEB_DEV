// get the series as an array
const Fibonacci = (n) => {
  if (n <= 1) return [0, 1];
  const fs = [0, 1];
  for (let i = 0, j = 1, S = 0; n > 1; --n, i = j, j = S) fs.push((S = i + j));
  return fs;
};

// get only the last number of the fib series
const fib = (n) => n === 0 ? 0 : n === 1 ? 1 : fib(n - 1) + fib(n - 2);

const n = 10;
console.log('\n---------------------------------------\n');

console.log(Fibonacci(n));

console.log('\n---------------------------------------\n');

console.log(fib(n));

console.log('\n---------------------------------------\n');