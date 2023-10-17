// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator

const log = console.log;

const O1 = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (++i > 10) return { value: undefined, done: true, };
        return { value: "😂", done: false, };
      },
      return() {
        return { value: undefined, done: true, };
      }
    };
  },
};

// for (const v of O1) log(v);
// log();
// log(...O1);


const O2 = {
  // [Symbol.iterator]: function* () {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

log(...O2);
for (const v of O2) log(v);