"use strict";
const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

//=====================================================

let f1;
{
  const o = { name: "MG", age: 26 };
  f1 = () => `- name: ${o.name}, age: ${o.age}`;
}
log(f1());

// IIFE
const fun = (() => {
  let i = 0;
  return () => `- Called ${++i} Times(s)`;
})();

log(fun());
log(fun());
log(fun());

// var

//=====================================================

log("\n");
console.timeEnd("T");
