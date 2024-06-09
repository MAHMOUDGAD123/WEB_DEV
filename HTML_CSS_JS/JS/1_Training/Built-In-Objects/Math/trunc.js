const log = console.log;

log('------------------------------\n');

const n = 123.456;

log(Math.trunc(n));
log(~~n);
log(n & -1);
log(n | 0);
log(n ^ 0);
log(n >> 0);
log(n >>> 0);
log();

const m = -5461685476516;

log(Math.trunc(m)); // ✔️
log(~~m); // ✖️

log('\n------------------------------\n');