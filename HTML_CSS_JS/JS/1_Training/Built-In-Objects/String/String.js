const log = console.log;

log('\n-----------------------------\n');

log(String(Symbol('MG')));
// log(`${Symbol('MG')}`); // error

log();

log([...'MG']);
log('👨‍👦'.split(''));
log([...'👨‍👦']);

log('\n-----------------------------\n');