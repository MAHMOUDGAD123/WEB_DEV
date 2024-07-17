const log = console.log;

log('\n-----------------------------\n');

// freeze() - make unextensiable (configurable: false & writable: false)
log('freeze()');
const o1 = { prop: 'property' };
log(Object.getOwnPropertyDescriptor(o1, 'prop'));
Object.freeze(o1);
log(Object.getOwnPropertyDescriptor(o1, 'prop'));

log('seal()');
// seal() - make unextensiable and -> (configurable: false)
const o2 = { prop: 'property' };
log(Object.getOwnPropertyDescriptor(o2, 'prop'));
Object.seal(o2);
log(Object.getOwnPropertyDescriptor(o2, 'prop'));

log('prventExtensions()');
// prventExtensions() - only make unextensiable
const o3 = { prop: 'property' };
log(Object.getOwnPropertyDescriptor(o3, 'prop'));
Object.preventExtensions(o3);
log(Object.getOwnPropertyDescriptor(o3, 'prop'));

log('\n-----------------------------\n');

// property own
const o4 = Object.create({ a: 1 }, {
  b: {
    value: 2,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  c: {
    value: 3,
    writable: true,
    enumerable: true,
    configurable: true,
  },
  d: {
    value: 4,
    writable: true,
    enumerable: false,
    configurable: true,
  },
  [Symbol.for('e')]: {
    value: 4,
    writable: true,
    enumerable: false,
    configurable: true,
  },
});

// custom function with same behavior of Object.hasOwnProperty
Object.defineProperty(Object.prototype, 'directOwn', {
  value: function (prop) {
    return !!Object.create(null, Object.getOwnPropertyDescriptors(this))[prop];
  },
  writable: true,
  enumerable: false,
  configurable: true,
});

log('a' in o4); // direct & inherited
log(!!o4['a']); // direct & inherited
log(o4.directOwn('a'));
log(o4.hasOwnProperty('a')); // only direct

log('\n-----------------------------\n');

/**
 * get all properties names using ( for..in ) loop
 * @param {object} o
 * @returns {Array}
 */
const getProperties = (o) => {
  const a = [];
  for (const p in o) {
    a.push(p);
  }
  return a;
};

log(getProperties(o4)); // all owned-inhertited-enumerable properties
log(Object.keys(o4)); // only owned-enumerable properties
log(Object.getOwnPropertyNames(o4)); // get all owned properties
log(Object.getOwnPropertySymbols(o4)); // get all owned properties symbols

log('\n-----------------------------\n');