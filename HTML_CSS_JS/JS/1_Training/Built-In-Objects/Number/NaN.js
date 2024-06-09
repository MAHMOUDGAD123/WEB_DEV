const log = console.log;

const __isNaN = x => x !== x;

log('\n------------------------------\n');
log(NaN === NaN);
log(NaN !== NaN);
log(NaN === Number.NaN);
log(NaN !== Number.NaN);
log();
log(NaN ** 0);
log(NaN ** 2);
log(NaN ** 0 === 1);
log();
log(isNaN(NaN));
log(Number.isNaN(NaN));
log(__isNaN(NaN));
log();
log(isNaN("string"));
log(Number.isNaN("string"));
log(Number.isNaN(+"string"));
log('\n------------------------------\n');
const arr = [1,2,3,NaN, "MG", 4,5];
log(arr.find(v => v !== v));
log(arr.findIndex(Number.isNaN));
log(arr.indexOf(NaN)); // ✖️
log(arr.includes(NaN)); // ✔️
log('\n------------------------------\n');