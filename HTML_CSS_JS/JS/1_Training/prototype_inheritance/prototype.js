const log = console.log;
const proto = Object.getPrototypeOf;

log('\n-------------------------------------\n');

// set the prototype using --> __proto__
const o1 = {
  a: 1,
  b: 2,

  __proto__: {
    c: 3,
    d: 4,

    __proto__: {
      e: 5,

      __proto__: null,
    }
  },
};

log(o1.a, o1.b, o1.c, o1.d, o1.e);
log(o1);
log(proto(o1));
log(proto(proto(o1)));
log(proto(proto(proto(o1))));

log('\n-------------------------------------\n');

// global prototype
// [1] using __proto__
const prototype = {
  getName() {
    return this.name;
  }
};

const persons = [
  { name: 'Ali', __proto__: prototype },
  { name: 'Samy', __proto__: prototype },
  { name: 'Dani', __proto__: prototype },
];

persons.forEach(p => {
  log(p.getName());
});

log();
// [2] using function
function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  return this.name;
};

[new Person('Ali'), new Person('Samy'), new Person('Dani')].forEach(p => {
  log(p.getName());
});

log();
// [3] using class
class Human {
  #name = '';
  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }
}

[new Human('Ali'), new Human('Samy'), new Human('Dani')].forEach(p => {
  log(p.getName());
});

log('\n-------------------------------------\n');

log(Number.prototype + 0); // 0 + 0
log(RegExp.prototype.source); // /(?:)/
log(Array.prototype.map(v => v)); // []
log('"' + String.prototype + '"'); // "" + ""
log(Function.prototype() === (function () {})()); // Function.prototype is a no-op function

log('\n-------------------------------------\n');

// inheritance using functions
function Base() {}
function Derived() {}
Object.setPrototypeOf(Derived.prototype, Base.prototype);

// instance --> Derived.prototype --> Base.prototype --> Object.prototype --> null
log(new Derived().__proto__);

// inheritance using classes
class Parent {}
class Child extends Parent {}

// instance --> Child.prototype --> Parent.prototype --> Object.prototype --> null
log(new Child().__proto__);

log('\n-------------------------------------\n');

// create an object instance with a direct null prototype

log(proto({ __proto__: null }));
log(proto(Object.create(null)));

log('\n-------------------------------------\n');