const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

// using strict mode in function will produce an error in the next cases:

// 1- default parameters
// function f1(x, y = 1) { "use strict"; return x + y;}

// 2- rest parameter
// function f1(n, ...rest) { "use strict"; return n + rest.reduce((p, c) => p + c);}

// 3- destructing parameters
// function f1({ name, age }) { "use strict"; return "my name is " + name + " & i'm " + age + " years old."; }

// ============================================================================

// No syncing between parameters and arguments indices
function f1(a) {
  "use strict";
  a = 5; // arguments[0] will keep the same value of 1
  return [arguments[0], arguments[1], arguments[2]];
}
log(f1(1, 2, 3));

// ============================================================================

// ============================================================================
console.timeEnd("T");
