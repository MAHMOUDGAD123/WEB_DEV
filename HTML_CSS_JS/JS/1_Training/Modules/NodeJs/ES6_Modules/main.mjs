console.log('\n');
const log = console.log;
//====================================================

// import allOp, * as math from './math.mjs';
// import allOp, * as funcs from './funcs.mjs';

import * as all from './barrel.mjs';

let a = 10, b = 2
const name = 'Mahmoud', age = 26;

log(all.funcs.sayHi(name));
log(all.funcs.sayBye(name));
log(all.funcs.whoAmI(name, age));
log('\n');
log(all.math.add(a, b));
log(all.math.sub(a, b));
log(all.math.pow(a, b));

//====================================================
console.log('\n');