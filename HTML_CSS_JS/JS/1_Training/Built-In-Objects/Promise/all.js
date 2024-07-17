const log = console.log;
const error = console.error;
const line = '\n------------------------------------------------\n';

log(line);


// calling with an empty array
// will immediately resolved
const p1 = Promise.all([]);

const p2 = Promise.all([10, 20]); 

log(p1, '-> p1'); // <fullfilled>
log(p2, '-> p2'); // <pending>

// using setTimeout to wait until p2 is fullfilled
setTimeout(() => {
  log(p2, '-> p2'); // now fullfilled
}, 0);

//-----------------------------

const resolved = (value) => {
  log(value);
};

const rejected = (err) => {
  error(err);
};

Promise.all([1,2,3, Promise.resolve(4)]).then(resolved, rejected);
Promise.all([1,2,3, Promise.reject('❌')]).then(resolved, rejected);
Promise.all([1,2, Promise.reject('❌'), 4]).then(resolved, rejected);
Promise.all([Promise.reject('❌'), 2, 3, 4]).then(resolved, rejected);


setTimeout(() => log(line), 1);