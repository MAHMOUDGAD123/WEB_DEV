const log = console.log;

const clz32 = (n) => Math.clz32(n);
const clo32 = (n) => Math.clz32(~n);

/**
 * @param {number} n int
 * @returns {number} leading zeros count
 */
const __clz32 = (n) => {
  let C = 0;
  while (!(n & 0b10000000000000000000000000000000)) C++, n <<= 1;
  return C;
};

/**
 * @param {number} n int
 * @returns {number} trailing zeros count
 */
const __ctz32 = (n) => {
  let C = 0;
  while (!(n & 0b00000000000000000000000000000001)) C++, n >>>= 1;
  return C;
};

/**
 * @param {number} n int
 * @returns {number} leading ones count
 */
const __clo32 = (n) => __clz32(~n);

/**
 * @param {number} n int
 * @returns {number} trailing ones count
 */
const __cto32 = (n) => __ctz32(~n);

log('------------------------------\n');

const a = 0b00000000000000000000000000000001;

// leading zeros
log("leading zeros:", clz32(a), __clz32(a));

const b = 0b00000000000000000000000111100000;

// trailing zeros
log("trailing zeros:", __ctz32(b));

const c = 0b11110000000000000000000000000001;

// leading ones
log("leading ones:", clo32(c), __clo32(c));

const d = 0b11110000000000000000000000011111;

// trailing ones
log("trailing ones:", __cto32(d));

log('\n------------------------------\n');