const log = console.log;

/**
 * @param {number} n - number
 * @param {number} p - power - only 32-bit integer
 */
const ipow = (n, p) => {
  if (isNaN(p)) return NaN;
  p >>= 0; // always integer
  const isNegative = p < 0; // check if the p is negative
  let _p = isNegative ? -p : p;
  let res = 1;
  while (_p--) res *= n;
  return isNegative ? 1 / res : res;
};

log('\n- pow(n, p)');
log('------------------------------\n');

const n = 5;
const p = -5;

log(Math.pow(n, p));
log(n ** p);
log(ipow(n, p));

log('\n------------------------------\n');