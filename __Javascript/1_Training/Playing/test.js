const log = console.log; // alias
"use strict";

log("\n\n");
// console.time("T");
//=====================================================

const a1 = [1,2,3];
const a2 = [4,5,6];

const arr_like = {
  "0": "Mahmoud",
  "1": "26",
  "2": "Male",
  "3": "Mansoura",
};

Object.defineProperties(arr_like, {
  [Symbol.isConcatSpreadable]: {
    value: true,
  },
  length: {
    value: Object.keys(arr_like).length,
  },
  [Symbol.iterator]: {
    value: function () {
      let i = -1;
      return {
        next() {
          return ++i < arr_like.length 
            ? { value: arr_like[i], done: false, }
            : { value: undefined, done: true };
        },
      };
    },
  }
});

log(...arr_like);
log(a1.concat(arr_like));

//=====================================================
// console.timeEnd("T");
log("\n\n");