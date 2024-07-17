
// get only the last number of the fib series
const fib = (n) => n === 1 ? 0 : n === 2 ? 1 : fib(n - 1) + fib(n - 2);

// get the series as an array
const Fibonacci = (n) => {
  if (n <= 1) return [0, 1];
  const fs = [0, 1];
  for (let i = 0, j = 1, S = 0; n > 2; --n, i = j, j = S) fs.push((S = i + j));
  return fs;
};

// using generator
function* fib_gen(n) {
  let i = 0, j = 1;
  while (n--) {
    yield i;
    [i, j] = [j, i + j];
  }
}

const n = 15;

console.log('\n---------------------------------------\n');

console.log(fib(n));

console.log('\n---------------------------------------\n');

console.log(Fibonacci(n));

console.log('\n---------------------------------------\n');

console.log([...fib_gen(n)]);

console.log('\n---------------------------------------\n');

// fibonacci series with reset feature
function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    const reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2

console.log('\n---------------------------------------\n');
