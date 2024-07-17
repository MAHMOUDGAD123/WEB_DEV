const log = console.log;

log('\n----------------------------------------\n');

// can't resolve the promise with the same promise object
// log(new Promise((resolve, reject) => {
//   resolve(p1); // TypeError -- can't access p1 before initialization
// }));

// reolve with a non-thenable vaue (primative - object)
log(new Promise((resolve, reject) => {
  resolve('🆗'); // fullfilled (settled)
}));

log(new Promise((resolve, reject) => {
  resolve({ value: '🆗' }); // fullfilled (settled)
}));

// reolve with a thenable (an object which have then() function)
log(new Promise((resolve, reject) => {
  resolve({
    then(onFullfilled, onRejected) {
      onFullfilled('🆗'); // pending (not settled)
    }
  });
}));

// reolve with a new Promise object
log(new Promise((resolveOuter, rejectOuter) => {
  resolveOuter(new Promise((resolveInner, rejectInner) => {
    resolveInner('inner ✅'); // pending
  }));
}));

// reject with a value -- you should handle the rejected promise with catch()
new Promise((resolve, reject) => {
  reject('❌');
}).catch(e => log(e));

new Promise(resolve => setTimeout(_=> resolve('\n----------------------------------------\n'), 0)).then(line => log(line));