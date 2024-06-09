// function to print any iterable object
const log = console.log;

const print = (it, n) => {
  log('\nMethod ' + n + ':');
  log('--------------------------------------')
  let data = `Obj { [len: ${it.length}]`;
  for (const v of it) data += `, ${v}`;
  data += " }";
  log(data);
  log('--------------------------------------\n')
};

// Hw to make any object iterable ?????

// Method [1]: using Iterator-Protocal - with literal object
const O1 = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 };

Object.defineProperties(O1, {
  length: {
    value: Object.keys(O1).length,
    writable: true,
  },
  [Symbol.iterator]: {
    value: function() {
      const len = this.length;
      let i = -1;
      return {
        next() {
          if(++i < len) return { value: O1[i], done: false, }
          return { value: undefined, done: true, }
        },
      }
    },
  }
});

// print(O1, 1);

// ============================================

// Method [2]: using Iterator-Protocal - with class

class iterable1 {
  #length = 0;

  constructor(O) {
    this.O = O;
    this.#length = Object.keys(O).length;
  }

  get length() { return this.#length; }

  [Symbol.iterator]() {
    const len = this.#length;
      let i = -1;
      return {
        next() {
          if(++i < len) return { value: O1[i], done: false, }
          return { value: undefined, done: true, }
        },
      }
  }
}

const O2 = new iterable1({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 });
// print(O2, 2);

// ============================================

// Method [3]: using Generator - with class

class iterable2 {
  #length = 0;

  constructor(O) {
    this.O = O;
    this.#length = Object.keys(O).length;
  }

  get length() { return this.#length; }

  *[Symbol.iterator]() {
    // for (const k of Object.keys(this.O)) yield this.O[k];
    yield* Object.values(this.O);
  }
}

const O3 = new iterable1({ 0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6, 6: 7 });
// print(O3, 3);

// ============================================

// Examble: Fibonacci series usig Iterator-Protocol

class Fibonacci_IP {
  // n - is the fib series stop number
  #n = 0;

  constructor(n) {
    this.#n = n;
  }

  get n() {
    return this.#n;
  }
  
  set n(n) {
    this.#n = n;
  }

  print() {
    log('\nIP Fibonacci:')
    log('--------------------------------------')
    let data = `Fib {`;
    for (const v of this) data += ` ${v} -`;
    data += "\b}";
    log(data);
    log('--------------------------------------\n')
  }

  [Symbol.iterator]() {
    let _n = this.#n;
    let i = 0, j = 1, S = 0;

    return {
      next() {
        if (_n) {
          S = j;
          j += i, i = S, --_n;
          return { value: S, done: false }
        }
        return { done: true };
      }
    }
  }
}

const fib1 = new Fibonacci_IP(5);

// fib1.print();
// fib1.n = 7;
// fib1.print();

// ============================================

// Examble: Fibonacci series usig Generator

class Fibonacci_GEN {
  // n - is the fib series stop number
  #n = 0;

  constructor(n) {
    this.#n = n;
  }

  get n() {
    return this.#n;
  }
  
  set n(n) {
    this.#n = n;
  }

  print() {
    log('\nGEN Fibonacci:')
    log('--------------------------------------')
    let data = `Fib {`;
    for (const v of this) data += ` ${v} -`;
    data += "\b}";
    log(data);
    log('--------------------------------------\n')
  }

  *[Symbol.iterator]() {
    let _n = this.#n + 1;
    let i = 0, j = 1, S = 0;
    yield 0;
    while(--_n) (S = j, j += i, i = S, yield S);
  }
}

const fib2 = new Fibonacci_GEN(5);

fib2.print();
fib2.n = 7;
fib2.print();