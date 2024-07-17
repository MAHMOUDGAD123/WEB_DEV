const log = console.log;
const error = console.error;
const line = '\n------------------------------------------------\n';

log(line);


const { promise, resolve, reject } = Promise.withResolvers();

if ((Math.random() * 7 >>> 0) >= 3) {
  resolve("✅");
} else {
  reject("❌");
}

promise.then(v => {
  log(v);
}, e => {
  error(e);
});

// this is equivalent to the next
let _resolve, _reject;
const _promise = new Promise((res, rej) => {
  _resolve = res;
  _reject = rej;
});

if ((Math.random() * 7 >>> 0) >= 3) {
  _resolve("✅");
} else {
  _reject("❌");
}

_promise.then(v => {
  log(v);
}, e => {
  error(e);
});



setTimeout(_=> log(line), 0);