const log = console.log;
const proto = Object.getPrototypeOf;
const setproto = Object.setPrototypeOf;

log('\n-------------------------------------\n');

class A {
  constructor() {
    this.a = 'A';
  }
}
class B extends A {
  constructor() {
    super();
    this.b = 'B';
  }
}

// extends:
// sets the (A) function as a prototype to the (B) function
// and
// set the (A.prototype) as a prototype to the (B.prototype)

log(proto(B));
log(proto(B.prototype));
log();
log(proto(B) === A);
log(proto(B.prototype) === A.prototype);
log();
log(new B() instanceof B);
log(new B());

log('\n-------------------------------------\n');

// to achive this behavior using native function constructors
// we need to do the next ⬇️
function Parent() {
  this.p = 'Parent';
}
function Child() {
  Parent.call(this);
  this.c = 'Child';
}

setproto(Child, Parent);
setproto(Child.prototype, Parent.prototype);

log(proto(Child));
log(proto(Child.prototype));
log();
log(proto(Child) === Parent);
log(proto(Child.prototype) === Parent.prototype);
log();
log(new Child() instanceof Child);
log(new Child());

log('\n-------------------------------------\n');

// create a class from a inline parent class
new (class extends class {
  constructor() {
    log('Base Class');
  }
} {
  constructor() {
    super();
    log('Child Class');
  }
})();

log('\n-------------------------------------\n');

// extends { null }

// new (class extends null {})(); // ❌

// new (class extends null {
//   constructor() {}
// })(); // ❌

// new (class extends null {
//   constructor() {
//     super();
//   }
// })(); // ❌

// why ???
// because - it's not possible to construct such a class in practice using
// any constructor implementation that doesn't return an object.

// so you get to return an object from the derived class explicitly
class SomeClass extends null {
  constructor() {
    return Object.create(new.target.prototype);
  }
}

log(SomeClass.prototype);
log(proto(proto(new SomeClass())));

log();

log(proto(new SomeClass()));
// is the same as:
log(Object.create(null));
log({ __proto__: null });

// overall extending {null} is such a bullshit

log('\n-------------------------------------\n');

// example
class polygon {
  static #name = 'Polygon';
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  static get name() {
    return this.#name;
  }

  area() {
    return this.width * this.height;
  }
}

class Square extends polygon {
  static #name = 'Square';
  constructor(length) {
    super(length, length);
  }
}

const Poly = new polygon(10, 20);
const square = new Square(10);
log(polygon.name);
log(Square.name);
log(Poly.area());
log(square.area());

log('\n-------------------------------------\n');

// extends a built-in object
class FrmtDate extends Date {
  formatDate() {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
    ];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }
}

log(new FrmtDate().formatDate());

log('\n-------------------------------------\n');

// extends the Object constructor
// Object constructor special-case subclassing
// If it's implicitly called via super(),
// it always initializes a new object with (new.target.prototype) as its prototype.
// Any value passed to super() is ignored.
class ObjectExtention extends Object {
  constructor(value) {
    super(value);
  }
}

log(new ObjectExtention(1) instanceof Number); // false
log(new ObjectExtention('M') instanceof String); // false
log(new Object(1) instanceof Number); // true

// the behaviar is different with a custom wrapper
function CustomWrapper(value) {
  return new Object(value);
}

class WrapperExtention extends CustomWrapper {
  constructor(value) {
    super(value);
  }
}
log();
log(new WrapperExtention(1) instanceof Number); // true
log(new WrapperExtention('M') instanceof String); // true
log(new Object(1) instanceof Number); // true

log('\n-------------------------------------\n');

// using the default constructor
class MyArray extends Array {}

log(new MyArray(1,2,3).map(e => e * e) instanceof Array); // true
log(new MyArray(1,2,3).map(e => e * e) instanceof MyArray); // true

// [Symbol.species] The species pattern lets you override default constructors.
class CustomArray extends Array {
  static get [Symbol.species]() {
    return Array;
  }
}

log();
log(new CustomArray(1,2,3).map(e => e * e) instanceof Array); // true
log(new CustomArray(1,2,3).map(e => e * e) instanceof MyArray); // false

log('\n-------------------------------------\n');

// Abstract subclasses (mix-ins) | multi-inheritance

// A function with a superclass as input and a subclass extending
// that superclass as output can be used to implement mix-ins:
const MixinA = (Base) => class extends Base {};
const MixinB = (Base) => class extends Base {};

// A class that uses these mix-ins can then be written like this:
class cls {}
class Example extends MixinA(MixinB(cls)) {}

// create an instance from the Example
const ex = new Example();

// Example:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

// Employee mix-in
const Employee = (Base) => class extends Base {
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }
};

// programmer mix-in
const Programmer = (Base) => class extends Base {
  constructor(name, age, salary, stack, programmingLang) {
    super(name, age, salary);
    this.stack = stack;
    this.programmingLang = programmingLang;
  }
};

class WebDeveloper extends Programmer(Employee(Person)) {
  /**
   * @param {string} name 
   * @param {number} age 
   * @param {number} salary 
   * @param {string} stack 
   * @param {string} programmingLang 
   * @param {string[]} technologies 
   */
  constructor(name, age, salary, stack, programmingLang, technologies) {
    super(name, age, salary, stack, programmingLang);
    this.technologies = technologies;
  }

  printInfo() {
    log('\n=========================================\n');
    log(`- Name|-> ${this.name}`);
    log(`- Age|-> ${this.age}`);
    log(`- Salary|-> ${this.salary}$`);
    log(`- Stack|-> ${this.stack}`);
    log(`- Language|-> ${this.programmingLang}`);
    log(`- Technologies: [\n    ${this.technologies.join('\n    ')}\n  ]`);
    log('\n=========================================\n');
  }
}

// create a Programmer instance
const MG = new WebDeveloper("Mahmoud Gad", 26, 30000, "Ful-Stack", "JavaScript", [ 'React.js', 'React-Native.js', 'Angular', 'node.js', 'Git' ]);
MG.printInfo();

log('\n-------------------------------------\n');

// Composition - use another class inside your class
// it's a replacment of inheritance when you have a problems with it
class MyMap {
  #data;

  constructor(iterable) {
    this.#data = new Map(iterable);
  }

  size() {
    return this.#data.size;
  }

  get(key) {
    return this.#data.get(key);
  }
  
  set(key, value) {
    return this.#data.set(key, value);
  }

  delete(key) {
    this.#data.delete(key);
  }

  *keys() {
    yield* this.#data.keys();
  }

  *values() {
    yield* this.#data.values();
  }

  *[Symbol.iterator]() {
    yield* this.#data[Symbol.iterator]();
  }
}

const M = new MyMap([
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]);

log(M.get(1));

log('\n-------------------------------------\n');