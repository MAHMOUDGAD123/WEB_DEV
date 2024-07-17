const log = console.log;
const error = console.error;
const line = '\n------------------------------------------------\n';

log(line);

// calling with an empty input
Promise.any([]).then(v => {
  log(v, '-> empty\n');
}, e => {
  error(e, '-> empty\n');
});

//--------------------------------

const pErr = new Promise((res, rej) => {
  rej('Fails');
});

const pFast = new Promise((res, rej) => {
  setTimeout(res, 3, 'Fast');
});

const pSlow = new Promise((res, rej) => {
  setTimeout(res, 5, 'Slow');
});

// returns a promise fullfilled with the first settled promise of the list
Promise.any([pErr, pFast, pSlow]).then(v => {
  log(v, '\n');
});

// returns a rejected promise if all of the promises rejects
const allRejected = [
  Promise.reject('❌'),
  Promise.reject('✖️'),
];

Promise.any(allRejected).catch(e => {
  log(e, '\n');
});


setTimeout(() => log(line), 10);