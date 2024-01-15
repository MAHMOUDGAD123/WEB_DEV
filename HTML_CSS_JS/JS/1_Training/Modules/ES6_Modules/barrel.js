'use strict';

function sayHi(P) {
  console.log('Hi, ' + P.name);
}

function sayBye(P) {
  console.log('Bye, ' + P.name);
}

function sayHello(P) {
  console.log('Hello, ' + P.name);
}

// means export all from Person.js file
// export * from './Person.js';

// inline exporting
export const name = 'Mahmoud';
export const age = 26;

// aggregating ( re-exporting )
export { default } from './Person.js';
// normal export
export { sayHi, sayBye, sayHello };