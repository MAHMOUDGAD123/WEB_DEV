function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.whoAmI = function () {
  console.log(
    `my name is ${this.name} and i'm ${this.age} years old`
  );
};

function sayHi(person) {
  console.log(`Hi, ${person.name}`);
}

const myName = 'Mahmoud';
const myAge = 26;


// module.exports.Person = Person;
// module.exports.sayHi = sayHi;
// module.exports.myName = myName;
// module.exports.myAge = myAge;

// or we can export all at once
module.exports = { Person, sayHi, myName, myAge };