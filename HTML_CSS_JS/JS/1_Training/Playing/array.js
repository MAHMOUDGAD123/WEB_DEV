// "use strict";
const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

//=====================================================
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const s_arr = ["Mahmoud", "Abdelrahman", "Ismail"];

// copyWithin()
// arr.copyWithin(3, 0, -1);
// log(arr);

// findIndex() & find()
const idx = arr.findIndex((v) => v > 2 && v < 5);
log(idx);
const val = arr.find((v) => v > 2 && v < 5);
log(val);

const sum = arr.reduce((prev, curr) => prev + curr);
log(sum);

const my_name = s_arr.reduce((prev, curr) => prev + " " + curr);
log(my_name);

const factorial_5 = [1, 2, 3, 4, 5].reduceRight((fact, n) => fact * n);
log(factorial_5);

//=====================================================

log("\n");
console.timeEnd("T");
