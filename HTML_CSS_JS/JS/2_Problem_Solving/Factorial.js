const n = 10;

console.log('\n---------------------------------------\n');
console.time("fact");

// iterative factorial
// time complixity: O(n)
// space complixity: O(1)
/**
 * 
 * @param {number} n number
 * @returns number
 */
const fact = (n) => {
  let fact = 1;
  while (n > 1) fact *= n--;
  return fact;
};

console.log(`fact(${n}) ->`, fact(n));

// for (let i = 0; i <= n; ++i) {
//   // console.log(`fact(${i}) ->`, fact(i));
//   fact(i);
// }

console.timeEnd("fact");
console.log('\n---------------------------------------\n');
console.time("fact_rec");

// recursive factorial
// time complixity: O(n)
// space complixity: O(n)
const fact_rec = (n) => n ? n * fact_rec(n - 1) : 1;

console.log(`fact_rec(${n}) ->`, fact_rec(n));

// for (let i = 0; i <= n; ++i) {
//   // console.log(`fact_rec(${i}) ->`, fact_rec(i));
//   fact_rec(i);
// }

console.timeEnd("fact_rec");
console.log('\n---------------------------------------\n');