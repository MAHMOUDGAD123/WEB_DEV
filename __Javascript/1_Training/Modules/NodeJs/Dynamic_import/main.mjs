console.log('\n');

// Dynamic importing using import() expression
//============================================

const { greeting, math } = await import('./barrel.mjs');

console.log(greeting.whoAmI('Mahmoud', 26), '\n');

math.default(8, 5);

//============================================

// const [greeting, math] = await Promise.all([
//   import('./Greeting.mjs'),
//   import('./math.mjs')
// ]);

// console.log(greeting.sayBye('Mahmoud'));
// console.log(math.add(10, 15));

//============================================
console.log('\n');