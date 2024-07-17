const log = console.log;

log('\n-------------------------------\n');

// methods definitions on literal objects
const o = {
  // normal method
  f1: function () { return 'f1' },
  f2() { return 'f2' },
  // generator function
  f3: function* () { yield 'f3' },
  *f4() { yield 'f4' },
  // async generator function
  f5: async function* () { yield 'f5' },
  async *f6() { yield 'f6' },
  // computed property names
  ['f' + 7]() { return 'f7' },
  *['f' + 8]() { yield 'f8' },
  async *['f' + 9]() { yield 'f9' },
};

for (let i = 1; i < 10; ++i) log(o['f' + i]());

log('\n-------------------------------\n');

// methods definitions on classes
class cls {
  m1() { return 'm1' }
  *m2() { yield 'm2' }
  async *m3() { yield 'm3' }
  ['m' + 4]() { return 'm4' }
  *['m' + 5]() { yield 'm5' }
  async *['m' + 6]() { yield 'm6'}
}

const intsance = new cls();

for (let i = 1; i < 7; ++i) log(intsance['m' + i]());

log('\n-------------------------------\n');