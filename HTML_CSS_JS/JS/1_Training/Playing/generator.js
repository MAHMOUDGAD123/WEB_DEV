const log = console.log;

// generator and return

function* $123() {
  yield 1;
  yield 2;
  return 3;
}
const _abc_ = $123();
log('\n----------------------------\n');
log(_abc_.next()); // 1
log(_abc_.next()); // 2
log(_abc_.next()); // 3

for (const v of $123()) log(v); // only prints { 1, 2 } not 3
log('\n----------------------------\n');

// yield Expressions and Two-Way Communication between a generator and its caller

function* name_age() {
  const name = yield "- What is your name?"
  const age = yield "- How old are you?"
  const city = yield "- Where are you from?"
  return `- My name is ${name}, i'm ${age} years old and i'm from ${city} city.`;
}

const info = name_age();

log('\n---------------------------------------\n');
log(info.next().value);
log(info.next("Mahmoud").value);
log(info.next(26).value);
log(info.next("Mansourah").value);
log('\n---------------------------------------\n');

