const log = console.log;

const p1 = new Promise((resolve, reject) => {
  const N = Math.random() * 10 >>> 0;
  if (N >= 5) {
    resolve(N + ' is bigger than 5 🆗');
  } else {
    reject(new Error(N + ' is less than 5 ❌'));
  }
});

// using then() only
p1.then(value => log(value), reason => log(reason.message));

// using then() & catch()
// p1.then(value => log(value)).catch(reason => log(reason.message));

// using then() & catch() & finally
// p1.then(value => log(value)).catch(reason => log(reason.message)).finally(() => log('log from finally'));


new Promise((resolve, reject) => {
  throw new Error('ops!!');
}).then((v) => {
  log(v); // not called
}).catch(e => {
  log(e.message);
});


new Promise((resolve, reject) => {
  resolve('✅');
  throw new Error('✖️'); // have no effect
}).then(v => {
  log(v);
}).catch(e => {
  log(e.message); // not called
});