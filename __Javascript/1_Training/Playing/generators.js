const log = console.log; // alias
"use strict";
console.time("T");
log("\n");

//=====================================================
// fibonacci

function* fb(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; ++i) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// for (let i = 1; i < 27; ++i) log(...fb(i));

//=====================================================
// yield

function* gen(n) {
  let v;
  // only increase i if next() have a (true) value
  for (let i = 0; i < n; i += (v = yield i) ? 1 : 0) log("value:", v);
}

const n = 10;
const g = gen(n);

// for (let i = 0; i < n; ++i) log('i =', g.next(Math.random() * 5 >>> 0).value);

//=====================================================
// yield*

function* gen1(n) {
  for (let i = 0; i < n; ++i) yield i;
}

function* gen2(n) {
  yield* gen1(n);
  return "finished";
}

const ge = gen2(5);
// log(ge.next().value);
// log(ge.next().value);
// log(ge.next().value);
// log(ge.next().value);
// log(ge.next().value);
// log(ge.next().value); // value = finished

//=====================================================
// GeneratorFunction

// Function constructor
const GeneratorFunction = function* () {}.constructor;
log(GeneratorFunction);
log(GeneratorFunction.constructor);
log(GeneratorFunction.prototype);
log(GeneratorFunction.prototype.prototype);

const genFun1 = new GeneratorFunction('yield* [1,2,3,4,5,6,7];');
log(...genFun1()); // 1 2 3 4 5 6 7

const genFun2 = new GeneratorFunction('arr', 'yield* arr;');
log(...genFun2([1,2,3,4,5,6,7])); // 1 2 3 4 5 6 7

const genFun3 = new GeneratorFunction('n', `for (let i = 1; i < n; ++i) yield i;`);
log(...genFun3(8)); // 1 2 3 4 5 6 7

//=====================================================

log("\n");
console.timeEnd("T");