const log = console.log;
const error = console.error;
log('\n---------------------------------\n');

function f1() {
  log('calling f1');
  f2();
}
function f2() {
  log('calling f2');
  f3();
}
function f3() {
  log('calling f3');
  f4();
}
function f4() {
  log('calling f4');
  throw new Error("Error From (F4) ❌");
}

try {
  f1();
} catch(e) {
  log("msg from catch block");
  error(e.message);
} finally {
  log("msg from finally block");
}

log('\n---------------------------------\n');