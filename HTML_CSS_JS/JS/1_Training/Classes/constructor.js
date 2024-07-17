const log = console.log;

log('\n---------------------------------------\n');

// using default constructor
class MyError extends Error {
  getErrorMsg() {
    return 'My Error is: ' +  this.message;
  }
}

try {
  throw new MyError('THIS IS A VERY BAD ERROR 😡');
} catch (err) {
  if (err instanceof MyError) {
    log(err.name); // error is an Error not a MyError
    log(err.getErrorMsg());
  } else {
    log('UNKNOWN ERROR', err);
  }
}

log('\n---------------------------------------\n');

// using custom constructor
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = 'CustomError';
    this.code = 1997;
  }

  getErrorMsg() {
    return 'Custom Error is: ' +  this.message;
  }
}

try {
  throw new CustomError('THIS IS A GOOD ERROR 😊');
} catch (err) {
  if (err instanceof CustomError) {
    log(err.name); // error is now CustomError
    log(err.getErrorMsg());
  } else {
    log('UNKNOWN ERROR', err);
  }
}

log('\n---------------------------------------\n');

// return a value from the constructor

// the return value of the base cosnstructor can be any value
// but any value except object will be ignored.
// If the parent class constructor returns an object,
// that object will be used as the (this) value on which class
// fields of the derived class will be defined.
class A {
  constructor() {
    return 1; // this value is ignored
  }
}

class B extends A {
  constructor() {
    super();
    // return 1; // Error: derived classes can return an object only
  }
}

log(new A());
log(new B());

log('\n---------------------------------------\n');

class Base {
  constructor() {
    return { name: 'MG' }; // this will be used as the (this) value for instances from the derived class
  }
}

class Derived extends Base {
  // use the default constructor
  constructor() {
    super();
    this.age = 26;
  }

  // override the instanceof operator
  static [Symbol.hasInstance](i) {
    return i.constructor === Derived;
  }
}

// the instance isn't an instanse of the {Base} nor the {Derived}
// but it is an instance of the {Object} itself
const Base_i = new Base();
const Derived_i = new Derived();
log(Base_i instanceof Base);
log(Base_i instanceof Derived);
log(Base_i instanceof Object);
log();
log(Derived_i instanceof Base);
log(Derived_i instanceof Derived);
log(Derived_i instanceof Object);

log('\n---------------------------------------\n');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
}

const S = new Student('MG', 26, 1000152612);
log(S);
log(S instanceof Student);

log('\n---------------------------------------\n');