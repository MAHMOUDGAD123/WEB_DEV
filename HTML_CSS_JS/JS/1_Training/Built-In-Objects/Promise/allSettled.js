const log = console.log;
const error = console.error;
const line = '\n------------------------------------------------\n';

log(line);


// calling with an empty array
// will immediately resolved
const p1 = Promise.allSettled([]);

const p2 = Promise.allSettled([10, 20]); 

log(p1, '-> p1'); // <fullfilled>
log(p2, '-> p2'); // <pending>

// using setTimeout to wait until p2 is fullfilled
setTimeout(() => {
  log(p2, '-> p2'); // now fullfilled
}, 0);

//---------------------------------------

const resolved = (value) => {
  log(value);
};

const rejected = (err) => {
  error(err);
};

Promise.allSettled([1,2,3, Promise.resolve(4)]).then(resolved, rejected);
Promise.allSettled([1,2,3, Promise.reject('❌')]).then(resolved, rejected);


setTimeout(() => log(line), 1);