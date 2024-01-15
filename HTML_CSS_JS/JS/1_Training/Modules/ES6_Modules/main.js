'use strict';

// MDN reference
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

//=========================================================
// default importing & namespace importing:

// import Person, * as all from './barrel.js';

// const P = new Person(all.name, all.age);
// P.whoAmI();
// all.sayHi(P);
// all.sayBye(P);
// all.sayHello(P);

//=========================================================
// named importing:

// import {
//   default as Person,
//   name as myName,
//   age as myAge,
//   sayHi,
//   sayBye,
//   sayHello
// } from './barrel.js';

// const P1 = new Person(myName, myAge);
// P1.whoAmI();
// sayHi(P1);
// sayBye(P1);
// sayHello(P1);

//=========================================================
// dynamic importing using => import() function
// import expression return a promise object
// fulfilled with a module namespace object

// import('./barrel.js').then((val) => {
//   console.log(val); // fulfilled module namespace object
// },
// (err) => {
//   console.log(err);
// });

// (async () => {
//   const {
//     default: Person,
//     sayHi,
//     sayBye,
//     sayHello,
//     name,
//     age
//   } = await import('./barrel.js');

//   const P = new Person(name, age);
//   console.group('dynamic importing:');
//   P.whoAmI();
//   sayHi(P);
//   sayHello(P);
//   sayBye(P);
// })();

//=========================================================
// side effect importing
// we import nothing we just importing the side effects of the module

// // static importing
// import * as all from './side_effects.js';

// // or dynamic importing
// import('./side_effects.js').then((obj) => {
//   console.log(obj === all); // empty module namespace object
//   console.log(obj); // empty module namespace object
// });

//=========================================================