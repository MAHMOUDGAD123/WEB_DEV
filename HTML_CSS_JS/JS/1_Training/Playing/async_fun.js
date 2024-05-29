"use strict";
const log = console.log;
// log("\n");
console.time("T");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
//=====================================================
// async function

const resolveAfter2 = (v) => {
  return new Promise((res, rej) => {
    setTimeout(res, 2000, `resolved => ${v}`);
  });
};

// async function returns a Promsie object
async function asyncCall() {
  const response = await resolveAfter2(1997);
  log("inside: ", response);
  return response;
}

// asyncCall().then(v => { log('outside:', v); });

//=====================================================
// example using arrow function

const getPromise = (val, t) => {
  return new Promise((res, rej) => {
    setTimeout(res, t, val);
    // res(val);
  });
};

const __async__ = async (n, name, t) => {
  await log(name, "start");

  for (let i = 0; i < n; ++i) log(name, await getPromise(i + 1, t));

  await log(name, "finished");
};

// __async__(5, 'one:', 500);
// __async__(5, 'two:', 1000);

//=====================================================
// sync function vs async function

function syncPrint(n, name) {
  for (let i = 0; i < n; ++i) log(name, i + 1);
}

async function asyncPrint(n, name) {
  for (let i = 0; i < n; ++i) log(name, await Promise.resolve(i + 1));
}

// executed one after the other
// syncPrint(10, 'sync1:');
// syncPrint(10, 'sync2:');

// both executed at the same time
// asyncPrint(10, 'async1:');
// asyncPrint(10, 'async2:');

//=====================================================
// await

// used to get the value of the promise
// (async function (v) {
//   log(await Promise.resolve(v) + 3); // 2000
//   log(Promise.resolve(v)); // Promise { 1997 }
// })(1997);

async function asyncFun(name) {
  log(name, "begin");
  await log(name, "middle");
  // log(name, await 'middle');
  // log(name, 'middle');
  log(name, "last");
}

// asyncFun('1st:');
// asyncFun('2nd:');

//=====================================================
// test

// foo1 & foo2 are the same
async function foo1() {
  await 1;
}
function foo2() {
  return Promise.resolve(1).then(() => undefined);
}
// log(foo1());
// log(foo2());

// bar1 & bar2 are the same
// both returns promise { 1 }
async function bar1() {
  return 1;
}
function bar2() {
  return Promise.resolve(1);
}
// log(bar1());
// log(bar2());

//=====================================================
// comparison when return a promise

const p = Promise.resolve(1);

// if the given value is a promise
// async function returns a Promise with a new reference
async function asyncReturn() {
  return p;
}
// while normal Promise.resolve() return the same reference of p
function basicReturn() {
  return Promise.resolve(p);
}
// so:
// log(p === asyncReturn()); // false
// log(p === basicReturn()); // true

//=====================================================
// example

const __getPromise__ = (flag) =>
  new Promise((res, rej) => {
    setTimeout((_) => {
      if (flag) res("resolved");
      else rej("rejected");
    }, 1);
  });

const __asyncy__ = async (flag) => {
  // (1) you can use this one line only
  const result = await __getPromise__(flag).catch((err) => err);
  log(`${flag ? "SUCCESS" : "ERROR"}: ${result}`);

  // (2) or you can use try__catch block instead
  // try {
  //   const result = await __getPromise__(flag);
  //   log(`SUCCESS: ${result}`);
  // } catch (err) {
  //   log(`ERROR: ${err}`);
  // }
  // both get the same results
};

__asyncy__(true);
__asyncy__(false);

//=====================================================

// console.timeEnd("T");
// log("\n");
