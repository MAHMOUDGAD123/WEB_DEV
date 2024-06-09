const log = console.log;

log('\n------------------------------\n')
log(Number.isFinite(1 / 2));
log(Number.isFinite(1 / 0));
log(Number.isFinite(0 / 0));
log(Number.isFinite(+0 / -0));
log(Number.isFinite(0 / Infinity));
log('\n------------------------------\n')