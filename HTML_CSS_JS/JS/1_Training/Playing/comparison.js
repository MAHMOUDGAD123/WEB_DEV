const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
// ============================================================================

const same_value_zero = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x === y || (x !== x && y !== y);
  }
  return x === y;
};

const x = "1";
const y = 1;

log("\n$ number & string:");
log(`==  ${x == y}`);
log(`=== ${x === y}`);
log(`.is ${Object.is(x, y)}`);
log(`SVZ ${same_value_zero(x, y)}`);
log("\n$ +-Zero:");
log(`==  ${+0 == -0}`);
log(`=== ${+0 === -0}`);
log(`.is ${Object.is(+0, -0)}`);
log(`SVZ ${same_value_zero(+0, -0)}`);
log("\n$ NaN:");
log(`==  ${NaN == NaN}`);
log(`=== ${NaN === NaN}`);
log(`.is ${Object.is(NaN, NaN)}`);
log(`SVZ ${same_value_zero(NaN, NaN)}`);
log("\n$ NaN & Number.NaN:");
log(`==  ${NaN == Number.NaN}`);
log(`=== ${NaN === Number.NaN}`);
log(`.is ${Object.is(NaN, Number.NaN)}`);
log(`SVZ ${same_value_zero(NaN, Number.NaN)}\n`);

// ============================================================================
console.timeEnd("T");
