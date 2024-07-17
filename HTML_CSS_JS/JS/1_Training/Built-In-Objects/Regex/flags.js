const log = console.log;

log('\n------------------------------\n');

const reg1 = /(?<_g>.G)/g;
const reg2 = /(?<_g>.G)/si;
const reg3 = /(?<_g>.G)/d;
const reg4 = /(?<_g>MG)/y;
const reg5 = /(\u{4D})(\u{47})/u;
const reg6 = /(?<_g>^MG)/m;
const txt = 'gfd\ngskgl\nMG ldkMGlfklMG MGdjfkmGjkmG';

log(reg1.exec(txt), '-->', reg1.lastIndex);

log(reg2.exec(txt), '-->', reg2.lastIndex);

log(reg3.exec(txt), '-->', reg3.lastIndex);

reg4.lastIndex = 10;
log(reg4.exec(txt), '-->', reg4.lastIndex);

log(reg5.exec(txt), '-->', reg5.lastIndex);

log(reg6.exec(txt), '-->', reg6.lastIndex);

log('\n------------------------------\n');