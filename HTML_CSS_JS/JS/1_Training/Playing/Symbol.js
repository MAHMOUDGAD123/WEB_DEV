const log = console.log; // alias
("use strict");

log("\n\n");
//=====================================================

const numbers = {
  length: 9,
  vals: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum: 0,

  // get the primitive value of the object
  // but here we will return the sum of the array
  [Symbol.toPrimitive](hint) {
    if (hint[0] === "n")
      return this.sum
        ? this.sum
        : (this.sum = this.vals.reduce((v, c) => v + c));
    return null;
  },

  // make numbers iteratable
  // to make it support ( for..of ) loop ( like ranged-for in c++ )
  [Symbol.iterator]() {
    let i = -1;
    return {
      next() {
        if (++i === numbers.length) {
          log("done");
          return { value: undefined, done: true };
        }
        log("next");
        return { value: numbers.vals[i], done: false };
      },
      return() {
        log("returned");
        return { value: undefined, done: true };
      },
    };
  },
};

// for (const v of numbers) {
//   log(v);
//   // break;
// }

// log(numbers.sum);
// log(+numbers);
// log(numbers.sum);

//---------------------

const str = /Mahmoud/;
// stop treating it as a regex
str[Symbol.match] = false;

// log("/Mahmoud/".startsWith(str));

const sym = Symbol("S");
log(Symbol.for("S"));
log(Symbol.keyFor(Symbol.for("S")));

//=====================================================
log("\n\n");
