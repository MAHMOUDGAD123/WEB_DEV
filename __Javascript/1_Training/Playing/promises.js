const log = console.log;
"use strict";
console.time("T");
log("\n");

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//=====================================================
// promises

function getWeather() {
  return new Promise((resolve, reject) => {
    resolve('cloudy'); // the local weather
  });
}

function getTheWeatherIcon(weather) {
  return new Promise((resolve, reject) => {
    switch (weather) {
      case 'sunny': resolve('☀️');
      case 'cloudy': resolve('☁️');
      case 'rainy': resolve('🌧️');
      case 'rainbow': resolve('🌈');
    }
    reject('Unkown Weather❓');
  })
}

function onSuccess(data) { log(`Success: ${data}`); }
function onError(err) { log(`Faild: ${err}`); }

// using one then(success, fail)
// getWeather()
//   .then(getTheWeatherIcon)
//   .then(onSuccess, onError);

// using two thens one for success & one for fail
// getWeather()
//   .then(getTheWeatherIcon)
//   .then(onSuccess)
//   .then(null, onError);

// using then(success), catch(fail) and finally(do something)
// then(null, onErorr) === catch(onErorr)
// getWeather()
//   .then(getTheWeatherIcon)
//   .then(onSuccess)
//   .catch(onError)
//   .finally(() => { log('We Did It 😁') });


//=====================================================

// when no resolve() or reject() invoked 
// the Promise object will stuck at pending state
function getPromise() {
  return new Promise((resolve, reject) => {});
}

// Promsie { <pending> }
getPromise()
  .then(log) // == then(data => { log(data) })
  .catch(log) // == catch(err => { log(err) })
  .finally(() => {});

//=====================================================
// thenable object

const thenable = {
  then(onFulfilled, onError) {
    onFulfilled({
      then(onFulfilled, onError) {
        onFulfilled('Ok');
      },
    });
  },
};

// const p = Promise.resolve(thenable);
// log(p.then((data) => log(data))); // fulfilled with 'Ok'

//=====================================================
// Promise.then(onFulfill, onReject)

// const p = new Promise((resolve, reject) => {
//   resolve("resolved");
// });

// p.then(val => val).then(log); // 'resolved'
// p.then(() => 1997).then(log); // 1997
// p.then(() => {}).then(log); // undefined
// p.then(() => { throw 'throw error' }).then(log, log); // 'throw error'
// p.then(null, () => new Error('error')).catch(log); // 'error'


//=====================================================
// Promise.all(iterable)

// Promise.all([1,2,3]).then(vals => { log(vals) });
// Promise.all([1,2,3, Promise.reject('error')]).then(vals => { log(vals) });

//=====================================================
// Promise.allSettled(itrable)

// Promise.allSettled([
//   Promise.resolve('s1'),
//   Promise.resolve('s2'),
//   Promise.reject('e1'),
//   'string'
// ]).then(vals => {
//   vals.forEach(v => {
//     log(`${v.status} - ${v.value} - ${v.reason}`);
//   });
// });

//=====================================================
// Promise.any(iterable)
// Promise.race(iterable)

Promise.any([]).then(log, log); // AggregateError

Promise.race([]).then(log, log); // <pending>

Promise.any([
  new Promise((res, rej) => { setTimeout(res, 100, 's1') }), // fast ✅
  new Promise((res, rej) => { setTimeout(res, 200, 's2') }), // slow
  new Promise((res, rej) => { rej('err') })
]).then(
  (val) => { log('any:', val); },
  (err) => { log('any:', err); }
); // first fulfilled promise

Promise.race([
  new Promise((res, rej) => { setTimeout(res, 100, 's1') }), // fast ✅
  new Promise((res, rej) => { setTimeout(res, 200, 's2') }), // slow
  new Promise((res, rej) => { rej('err') })
]).then(
  (val) => { log('race:', val); },
  (err) => { log('race:', err); }
  ); // first settled promise

//=====================================================
// Promise.resolve(val)
// Promise.reject(reason)
//=====================================================



log("\n");
// console.timeEnd("T");