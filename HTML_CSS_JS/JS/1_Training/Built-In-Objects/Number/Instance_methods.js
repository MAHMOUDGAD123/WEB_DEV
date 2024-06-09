const log = console.log;

const n = 16546541.4564764;
log('\nNumber is: ' + n);
log('\n- toExponential(): ');
log('------------------------------\n');
log(n.toExponential());
log(n.toExponential(0));
log(n.toExponential(1));
log(n.toExponential(10));
log('\n------------------------------\n');

log('\n- toFixed(): ');
log('------------------------------\n');
log(n.toFixed());
log(n.toFixed(0));
log(n.toFixed(1));
log(n.toFixed(10));
log('\n------------------------------\n');

log('\n- toprecision(): ');
log('------------------------------\n');
log(n.toPrecision());
log(n.toPrecision(1));
log(n.toPrecision(3));
log(n.toPrecision(30));
log('\n------------------------------\n');

log('\n- toStirng(2 -> 36): ');
log('------------------------------\n');
log(n.toString());
log(n.toString(10));
log(n.toString(2));
log(n.toString(8));
log(n.toString(16));
log(n.toString(25));
log(n.toString(32));
log(n.toString(36));
log('\n------------------------------\n');

log('\n- valueOf(): ');
log('------------------------------\n');
log(n.valueOf());
log(new Number(n).valueOf());
log(Number((13513).toString(2)).valueOf());
log('\n------------------------------\n');