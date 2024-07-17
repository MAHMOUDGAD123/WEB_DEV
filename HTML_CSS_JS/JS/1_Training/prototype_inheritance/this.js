const log = console.log;
const proto = Object.getPrototypeOf;

log('\n-------------------------------------\n');

// in non-strict mode the function will return <globalThis>
function f1() {
  return this;
}
// in strict mode the function will return <undefined> instead of <globalThis>
function f2() {
  'use strict';
  return this;
}

const o = { a: 1 };

log(f1());
log(f2());
log(f2.call(o));

log('\n-------------------------------------\n');

// test on iterative methods
function logThis(_, i) {
  'use strict';
  log(this, i);
}

[1,2,3].forEach(logThis);
log();
[1,2,3].forEach(logThis, { a: 'a' });

log('\n-------------------------------------\n');

class C {
  #private_num = 1997;

  get_num() {
    return this.#private_num;
  };

  get_num_af = () => {
    return this.#private_num;
  };

  get_num_f = function () {
    return this.#private_num;
  };
}

log(new C().get_num());
log(new C().get_num_af());
log(new C().get_num_f());

log('\n-------------------------------------\n');