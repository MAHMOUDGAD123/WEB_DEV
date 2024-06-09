const log = console.log;
const proto = Object.getPrototypeOf;
//---------------------------------------------

const O = {
  a: 10,
  get get_a() {
    return this.a;
  },
  [Symbol("a")]: 10, // local symbol
  [Symbol.for("a")]: 10, // global symbol
};

log('\n-------------------------------');
log("-> Dummy Assignment:");
// only copy the return value of get_a not the accessor itself
const O1 = Object.assign({}, O);
log(O);
log(O1);

// to solve this problem we need to copy the discriptors itself from O
const complete_assign = (target, ...sources) => {
  sources.forEach(src => {
    // get keys (except symbol keys)
    const discriptors = Object.getOwnPropertyNames(src).reduce((discriptors, key) => {
      discriptors[key] = Object.getOwnPropertyDescriptor(src, key);
      return discriptors;
    }, {});

    // get symbol keys
    Object.getOwnPropertySymbols(src).forEach((sym) => {
      const discriptor = Object.getOwnPropertyDescriptor(src, sym);
      if (discriptor.enumerable) {
        discriptors[sym] = discriptor;
      }
    });

    Object.defineProperties(target, discriptors);
  });
  return target;
};
log('-------------------------------');
log("-> Smart Assignment:");
const O2 = complete_assign({}, O);
log(O);
log(O2);
log('-------------------------------\n');
