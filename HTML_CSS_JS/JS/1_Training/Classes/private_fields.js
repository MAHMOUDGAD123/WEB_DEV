const log = console.log;

log('\n---------------------------------------\n');

class classWithPrivates {
  #Private = 'pirvate property';
  static #staticPrivate = 'static private property';
  
  #privateMethod() { return 'private method'; }
  static #staticPrivateMethod() { return 'static private method'; }
}

log('\n---------------------------------------\n');

// another way to define a privates with out #notation
// using WeakMap
const PrivateNumberClass = (() => {
  const key = Object.create(null);
  const privates = new WeakMap();
  return class {
    constructor() { privates.set(key, 2); }
    get privateNumber() { return privates.get(key); }
    l_shift(n) { privates.set(key, privates.get(key) << n); }
    r_shift(n) { privates.set(key, privates.get(key) >>> n); }
  };
})();

const N = new PrivateNumberClass();
log(N.privateNumber);
N.l_shift(2);
log(N.privateNumber);
N.r_shift(1);

log('\n---------------------------------------\n');

// A class's constructor can return a different object,
// which will be used as the new this for the derived class constructor.
class Stamper extends class {
  constructor(obj) { return obj; } // now obj this the new (this) for any instance
} {
  #stamp = 1997; // now #stamp is private property in obj
  static getStamp(obj) { return obj.#stamp; }
  static setStamp(obj, newVal) { obj.#stamp = newVal; }
}

const o = { a: 10 };
new Stamper(o);

log(Stamper.getStamp(o));
Stamper.setStamp(o, 2024);
log(Stamper.getStamp(o));

// const S2 = new Stamper(o); // error

log('\n---------------------------------------\n');

// JS doesn't support constructor overloading
// but we can customize this using custom staric methods
class Person {
  static #isContructable = false;
  constructor(name, age) {
    if (!Person.#isContructable) {
      throw new TypeError("SORRY, YOU CAN'T INSTANTIATE THIS CLASS");
    }
    this.name = name;
    this.age = age;
    Person.#isContructable = false;
  }

  // custom contructors
  static createEmployee(name, age, salary) {
    Person.#isContructable = true;
    const employee = new Person(name, age);
    employee.salary = salary;
    return employee;
  }

  static createOfficer(name, age, weapon) {
    Person.#isContructable = true;
    const officer = new Person(name, age);
    officer.weapon = weapon;
    return officer;
  }
}

const employee = Person.createEmployee('Ali', 35, 15000);
const officer = Person.createOfficer('Ali', 35, 'm416');

log(employee);
log(officer);

// this will generate an error
// const p = new Person();

log('\n---------------------------------------\n');