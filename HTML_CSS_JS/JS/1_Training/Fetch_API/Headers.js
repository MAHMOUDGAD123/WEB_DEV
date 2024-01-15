"use strict";
const log = console.log;
log('\n');

//=====================================================
// Headers object

// create using object
const h1 = new Headers({
  "Id": 42839431,
  "name": "Mahmoud Gad",
  "age": 26,
});

// using array of pairs
const h2 = new Headers([
  ["Id", 42839431],
  ["name", "Mahmoud Gad"],
  ["age", 26]
]);

// using map
const h3 = new Headers(new Map([
  ["Id", 42839431],
  ["name", "Mahmoud Gad"],
  ["age", 26]
]));

// using another Hearders object
const h4 = new Headers(h1);

//=====================================================
// operations on Headers

// empty Headers and add
const h5 = new Headers();

// append a header
h5.append("content-type", 'mp4');

// get the header value by its name
const header = h5.get('content-type'); // mp4
log(header);

// update or add new pair
h5.set('content-type', 'pdf'); // update
h5.set('content-size', 1024); // add new 

log(h5.get('content-type'));
log(h5.get('content-size'));

// iterate throw h5
for (const v of h5) log(v);
// the previous is equivalent to this
for (const v of h5.entries()) log(v);
// the previous is equivalent to this
h5.forEach(v => { log(v); });

// log(h5);


// for more:
// https://developer.mozilla.org/en-US/docs/Web/API/Headers



//=====================================================

log('\n');