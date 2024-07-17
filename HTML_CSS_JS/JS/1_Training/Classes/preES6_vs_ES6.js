const log = console.log;

// pre ES6 class
// =========================================================

const PreES6Class = (() => {
  // private field
  let privateField;
  // class constructor
  function Constructor() {
    // instance field
    this.instanceField = 'Instance Field';
    privateField = 'Private Field';
  }
  // static field
  Constructor.staticField = 'Static Field';
  // instance method
  Constructor.prototype.instanceMethod = function() { return 'Instance Method'; };
  // static method
  Constructor.staticMethod = function() { return 'Static Method'; };
  // static initialization block
  (function() {})();

  return Constructor;
})();

// ES6 class
// =========================================================

class ES6Class {
  #privateField;
  instanceField;

  constructor() {
    this.instanceField = 'Instance Field';
    this.#privateField = 'Private Field';
  }

  static staticField = 'Static Field';
  instanceMethod() { return 'Instance Method'; }
  static staticMethod() { return 'Static Method'; }
  static {}
}

log('\n------------------------------------\n');

const pre_ES6 = new PreES6Class();
const ES6 = new ES6Class();

log(pre_ES6.instanceField);
log(ES6.instanceField);
log();
log(pre_ES6.instanceMethod());
log(ES6.instanceMethod());
log();
log(PreES6Class.staticField);
log(ES6Class.staticField);
log();
log(PreES6Class.staticMethod());
log(ES6Class.staticMethod());

log('\n------------------------------------\n');