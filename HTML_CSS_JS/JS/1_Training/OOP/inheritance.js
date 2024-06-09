const log = console.log;

class Person {
  static #count = 0;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    ++Person.#count
  }

  static count() {
    return Person.#count;
  }

  static isTheSame(P1, P2) {
    if (!P1 || !P2) return false;
    return P1.name === P2.name && P1.age === P2 .age;
  }

  // override the instanceof operator
  static [Symbol.hasInstance](i) {
    return i.constructor === Person;
  }
}

class Student extends Person {
  static #count = 0;
  #id;

  constructor(name, age) {
    super(name, age);
    this.#id = Student.#setId();
  }

  get id() {
    return this.#id;
  }

  static #setId() {
    return 1000 + ++Student.#count;
  }

  static count() {
    return Student.#count;
  }

  // override the instanceof operator
  static [Symbol.hasInstance](i) {
    return i.constructor === Student;
  }
}

class Employee extends Person {
  static #count = 0;

  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
    ++Employee.#count;
  }

  static count() {
    return Employee.#count;
  }

  // override the instanceof operator
  static [Symbol.hasInstance](i) {
    return i.constructor === Employee;
  }
}

const P1 = new Person("Dani", 26);
const P2 = new Person("Mera", 30);
const S1 = new Student("Ali", 20);
const S2 = new Student("Samy", 21);
const E1 = new Employee("The-Rock", 40, 15000);
const E2 = new Employee("Sena", 45, 15000);

log();
log("- P-Count:", Person.count());
log("- S-Count:", Student.count());
log("- E-Count:", Employee.count());
log();
log(P1 instanceof Person);
log(S1 instanceof Student);
log(E1 instanceof Employee);
log();
log(S1 instanceof Person);
log(S1 instanceof Person);
log();
log(S1 instanceof Employee);
log(E1 instanceof Student);
log();

log("=================================");

const O1 = Object.create(Person.prototype);
log(O1);
