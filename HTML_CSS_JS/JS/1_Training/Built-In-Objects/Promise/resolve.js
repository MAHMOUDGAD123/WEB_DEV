const log = console.log;
const line = '\n------------------------------------------------\n';

log(line);



// resolving a non-thenable value
log(Promise.resolve('MG'));
log(Promise.resolve({ value: 'MG' }));

// resolving a Promise object
log(Promise.resolve(new Promise((resolve) => {
  resolve('MG');
})));

// resolving a thenable object fullfilled with a value
Promise.resolve({
  then(onFullfilled, onRejected) {
    onFullfilled('one');
  }
}).then(v => {
  log(v);
});

// resolving a thenable object fullfilled with another thenable object that fullfilled with a value.
// Nested thenables will be "deeply flattened" to a single promise.
Promise.resolve({
  then(onFullfilled, onRejected) {
    onFullfilled({
      then(onFullfilled, onRejected) {
        onFullfilled('two');
      }
    });
  }
}).then(v => {
  log(v);
})



setTimeout(_=> log(line), 0);