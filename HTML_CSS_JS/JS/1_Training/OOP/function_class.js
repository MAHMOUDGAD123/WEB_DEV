const log = console.log;
const proto = Object.getPrototypeOf;
//---------------------------------------------

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student(name, age) {
  Person.call(this, name, age);
}

Student.prototype = Object.create(Person.prototype, {
  // If you don't set Rectangle.prototype.constructor to Rectangle,
  // it will take the prototype.constructor of Shape (parent).
  // To avoid that, we set the prototype.constructor to Rectangle (child).
  constructor: {
    value: Student,
    writable: true,
    enumerable: false,
    configurable: true,
  },
  // you can call it a static function
  getId: {
    value: (() => { let i = 0; return () => 1000 + ++i; })(),
    writable: false,
    enumerable: false,
    configurable: false,
  }
});

// ceate instances from [Student] class with private data properties

/**
* @param {string} name Person name
* @param {number} age Person age
* @returns 
*/
const create_student = (name, age) => {
  const S = new Student(name, age);
  return Object.defineProperties(S, {
    name: {
      value: name,
      writable: false,
      enumerable: true,
      configurable: false,
    },
    age: {
      value: age,
      writable: true,
      enumerable: true,
      configurable: false,
    },
    id: {
      value: Student.prototype.getId(),
      writable: false,
      enumerable: true,
      configurable: false,
    },
    
  })
};

const P1 = new Person("Mad", 26);
const S1 = create_student("Gad", 26);
const S2 = create_student("Omr", 30);
const S3 = create_student("Ali", 35);

log('\n-------------------------------------------');
log("S1 instanceof {Person} ->", S1 instanceof Person);
log("S1 instanceof {Student} ->", S1 instanceof Student);
log('-------------------------------------------');
log(P1);
log(S1);
log(S2);
log(S3);
log('-------------------------------------------');
S1.name = "MMM"; // do nothing because { writable: false }
S1.age = 50; // changed because { writable: true }
S1.id = 1010; // do nothing because { writable: false }
log(S1);
log('-------------------------------------------\n');
