const log = console.log;

log('\nDate.now()');
log('-----------------------------\n');

// const T = Date.now();
// for (let i = 0; i < 1000000000; ++i) ((i + i) ** i) << i | i ** i;
// log(`- It Took ${Date.now() - T}ms To Finish.`);

log('\nDate.parse()');
log('-----------------------------\n');

log(Date.parse('1970-01-01T00:00:00.000Z'));
log(Date.parse('1997-09-10T00:00:00.000Z'));
log(Date.parse('Thu, 01 Jan 1970 00:00:00 GMT'));
log(Date.parse('Thu, 01 Jan 1970 00:00:00 GMT+0300'));
log(Date.parse('10 sep 1997'));
log(Date.parse('sep 10, 1997'));

log('\nDate.UTC()');
log('-----------------------------\n');

log(Date.UTC(1997, 9, 10, 0, 0, 0, 0));
log(new Date(Date.UTC(1997, 9, 10, 0, 0, 0, 0)));

log('\n-----------------------------\n');