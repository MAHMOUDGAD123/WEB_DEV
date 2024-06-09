// "use strict";
const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

//=====================================================

const print = (arr) => {
  let data = `Array { len: ${arr.length}`;
  for (const v of arr) data += `, ${v}`;
  data += " }";
  log(data);
};

log("\nArray:");
log('-------------------------');

const arr = [];

print(arr);
arr.push(1);
arr.push(2);
print(arr);

//=====================================================

log("\nArrayLike:");
log('-------------------------');

const arrLike = {};
// add properties
Object.defineProperties(arrLike, {
  length: {
    value: 0,
    writable: true,
  },
  push: {
    value: function(n) {
      this[this.length++] = n;
    },
  },
  [Symbol.iterator]: {
    value: function*() {
      for(let i = 0; i < this.length; ++i) yield this[i];
    }
  }
});

print(arrLike);
arrLike.push(1);
arrLike.push(2);
print(arrLike);

//=====================================================
log();
console.timeEnd("T");
