console.log('\n');

//======================================================
// importing the data using require() function

// const functions = module.require('./Functions.js');

// const P1 = new functions.Person('Mahmoud', 26);
// console.log(P1);
// P1.whoAmI();
// functions.sayHi(P1);

//======================================================
// or we can do this

const { Person, sayHi, myName, myAge } = module.require('./Functions.js');

const P2 = new Person(myName, myAge);
console.log(P2);
P2.whoAmI();
sayHi(P2);

//======================================================
console.log('\n');