const log = console.log;

log('\n==========================================\n');
log('toString()');

const re = /abc/gdim;
log(re.toString());
log('/' + re.source + '/' + re.flags);
log(/(?:)/.toString());
log(new RegExp().toString());

log('\n==========================================\n');