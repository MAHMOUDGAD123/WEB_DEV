const log = console.log;

const isEqual = (x, y) => {
  return Math.abs(x - y) < Number.EPSILON;
};

const a1 = 0.1;
const b1 = 0.2;
const c1 = 0.3;

log('\n------------------------------\n')
log(a1 + b1 === c1); // floating point numbers should never be compared with ===
log(isEqual(a1 + b1, c1));
log('\n------------------------------\n')

// ===========================================================

const isEqual_tolerance = (x, y, tolerance = 0) => {
  return Math.abs(x - y) < (tolerance ? tolerance : 1) * Number.EPSILON;
};

const a2 = 1000.1;
const b2 = 1000.2;
const c2 = 2000.3;

log('\n------------------------------\n')
log(a2 + b2 === c2);
log(isEqual_tolerance(a2 + b2, c2)); // false
log(isEqual_tolerance(a2 + b2, c2, 2000)); // true
log('\n------------------------------\n')