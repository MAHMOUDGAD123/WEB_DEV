const log = console.log;

const O = {
  a: 10,
  b: 20,
  c: 30,
  [Symbol.for("d")]: 40,
};

// for (const p in O) {
//   if (O.hasOwnProperty(p)) log(p + ":", O[p]);
// }
  
Object.keys(O).forEach((p) => void(log(p + ":", O[p])));
log(Symbol.keyFor(Symbol.for("d")) + ":", O[Symbol.for("d")]);