const log = console.log; // alias
"use strict";

log("\n\n");
//=====================================================
// Playground Start

let O, D;
O = {};

Object.defineProperty(O, "a", {
  value: 10,
  writable: false,
  enumerable: false,
  configurable: true,
})
D = Object.getOwnPropertyDescriptor(O, "a");
log(D);

O = {
  a: 1,
  b: 2,
  c: 3,
}
D = Object.getOwnPropertyDescriptors(O);

O = Object.create(O.__proto__, D);
log(O);

// Playground End
//=====================================================
log("\n\n");
