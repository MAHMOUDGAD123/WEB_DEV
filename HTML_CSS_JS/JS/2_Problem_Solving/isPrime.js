const log = console.log;

/**
 * @param {number} n a number to check
 * @returns {boolean} the result
 */
const isPrime = (n) => {
  if (n < 2) return false;
  const half_n = n >>> 1;
  for (let i = 2; i <= half_n; ++i) if (!(n % i)) return false;
  return true;
};

/**
 * @param {number} nth 
 * @returns {number}
 */
const nth_prime = (nth) => {
  if (nth < 0) return NaN;
  let n = 2;
  for (; nth >= 0; ++n) if (isPrime(n)) --nth;
  return --n;
};

/**
 * @param {number} from the start of the range
 * @param {number} to the end of the range ( include )
 * @returns {number} the number of primes in this range
 */
const count_primes = (from, to) => {
  let C = 0;
  while (from <= to) if (isPrime(from++)) C++;
  return C;
};


log('\n-----------------------------\n');

for (let i = 0; i < 10; ++i) log(`{ ${i} } ->`, isPrime(i) ? 'is Prime' : "Not a Prime");

const nth = 1000;
log(`\n- Prime Number ${nth} Is -->`, `{ ${nth_prime(nth)} }`);

const from = 1, to = 1000;

log(`\n- Number Of Prime Numbers Between ${from} & ${to} = { ${count_primes(from , to)} } Primes.`);

log('\n-----------------------------\n');