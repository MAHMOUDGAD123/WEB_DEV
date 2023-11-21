"use strict";
const log = console.log;
const proto = Object.getPrototypeOf;
log("\n");
console.time("T");

//=====================================================

function outer(callBack, n, p) {
  return callBack(n, p);
}

function inner(n, p) {
  return n ** p;
}

log(outer(inner, 2, 10));


//=====================================================

console.timeEnd("T");
log("\n");