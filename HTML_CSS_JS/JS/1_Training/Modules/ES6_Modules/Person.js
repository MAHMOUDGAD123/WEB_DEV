'use strict';

function whoAmI() {
  console.log(`my name is ${this.name}, and i'm ${this.age}`);
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.whoAmI = whoAmI;
}

export { Person as default };