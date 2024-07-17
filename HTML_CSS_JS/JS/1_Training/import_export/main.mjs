console.log('\n-------------------------------\n');

import * as all from './barrel.mjs';

const { functions, c1, c2, c3 } = all;

console.log((functions.default()));
console.log((functions.f1()));
console.log((functions.f2()));
console.log((functions.f3()));
console.log();
console.log(c1, '-', c2, '-', c3);

console.log('\n-------------------------------\n');


console.log(data.name);
console.log(data.age);
console.log(data.gig);

// imports are hoisted
// the next two are equivalent
import data from './info.mjs';
// import { default as data } from './info.mjs';

console.log('\n-------------------------------\n');