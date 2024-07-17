const log = console.log;

log('\n---------------------------------------\n');

class Base {
  set field(val) {
    console.log('log from base:', val);
  }
}

class DerivedWithField extends Base {
  field = 1;
}

class DerivedWithConstructor extends Base {
  constructor() {
    super();
    this.field = 10;
  }
}

const i1 = new DerivedWithField(); // no log
log(i1.field);
const i2 = new DerivedWithConstructor(); // logs
log(i2.field);


log('\n---------------------------------------\n');

// assign using constructor
class Human {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// another method to assign using Object.assign
class Human_s {
  name;
  age;
  constructor(properties) {
    Object.assign(this, properties);
  }
}

log(new Human('Mahmoud', 26));
log(new Human_s({name: 'Mahmoud', age: 26}));

log('\n---------------------------------------\n');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
// you can access the properties of the parent class
class Programmer extends Person {
  name = `Programmer ${this.name}`;
  get superName() { return super.name; }
}

const programmer = new Programmer('Mahmoud', 26);
log(programmer.name);
log(programmer.superName);

log('\n---------------------------------------\n');