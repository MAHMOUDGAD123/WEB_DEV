'use strict';

// we use the ES6 modules in nodejs 
// in files with ( .mjs ) extension

const add = (a, b) => {
  return `add: ${a} + ${b} = ${a + b}`;
};

const sub = (a, b) => {
  return `sub: ${a} - ${b} = ${a - b}`;
};

const mul = (a, b) => {
  return `mul: ${a} * ${b} = ${a * b}`;
};

const pow = (a, b) => {
  return `pow: ${a} ** ${b} = ${a ** b}`;
};

const div = (a, b) => {
  return `div: ${a} / ${b} = ${a / b}`;
};

const mod = (a, b) => {
  return `mod: ${a} % ${b} = ${a % b}`;
};

const allOp = (a, b) => {
  console.log('-------------------');
  console.log('All Operations:');
  console.log('-------------------');
  console.log(add(a, b));
  console.log(sub(a, b));
  console.log(mul(a, b));
  console.log(div(a, b));
  console.log(pow(a, b));
  console.log(mod(a, b));
  console.log('-------------------');
};

export { allOp as default, add, sub, mul, pow, div, mod };