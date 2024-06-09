const log = console.log;

class Person {
  static #count = 0;
  #id;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.#id = Person.#setId();
  }

  static #setId() {
    return 1000 + ++Person.#count;
  }

  get id() {
    return this.#id;
  }

  static PersonCount() {
    return Person.#count;
  }

  static isTheSame(P1, P2) {
    if (!P1 || !P2) return false;
    return P1.name === P2.name && P1.age === P2 .age;
  }
  
  static isSameId(P1, P2) {
    if (!P1 || !P2) return false;
    return P1.id === P2.id;
  }
}

const P1 = new Person("Mahmoud", 26);
const P2 = new Person("Mahmoud", 26);
const P3 = new Person("Mera", 30);
const P4 = P1;

log();
log("isTheSame:", Person.isTheSame(P1, P2));
log("isSameId:", Person.isSameId(P1, P2));
log("isSameId:", Person.isSameId(P1, P4));
log("- Count:", Person.PersonCount());
log();
