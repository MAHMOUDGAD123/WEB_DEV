const log = console.log;
const error = console.error;

log('\n--------------------------------------\n');

// all the next are equivalent:
log(Math.floor.apply(undefined, [1.75]));
log(Function.prototype.apply.call(Math.floor, undefined, [1.75]));
log(Reflect.apply(Math.floor, undefined, [1.75]));

log('\n--------------------------------------\n');

const codes = [104, 101, 108, 108, 111];
log(String.fromCharCode(...codes));
log(Function.prototype.apply.call(String.fromCharCode, undefined, codes));
log(Reflect.apply(String.fromCharCode, undefined, codes));


log('\n--------------------------------------\n');

log(Reflect.apply(RegExp.prototype.exec, /(?<moon>moon)/, ['kamoon']).index);

log('\n--------------------------------------\n');