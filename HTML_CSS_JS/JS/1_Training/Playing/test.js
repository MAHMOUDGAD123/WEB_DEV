const proto = Object.getPrototypeOf;
const log = console.log;
console.time("T");

log('\n===============================\n');

const counter = (() => {
  let count = 0;
  return (zero = false) => {
    return zero ? (count = 0) : ++count;
  };
})();

log(counter());
log(counter());
log(counter());
log(counter());
log(counter(true));
log(counter());
log(counter());

log('\n===============================\n');
console.timeEnd("T");
