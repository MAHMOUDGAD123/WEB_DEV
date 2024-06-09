"use strict";
console.log('\n');

// https://developer.mozilla.org/en-US/docs/Web/API/Response
//===================================================================
// new Response(body, options);
/*
  (1) { optional } - body -: an object k/v -> default is { null }
  (2) { optional } - options -: an object {
    status,
    statusText,
    headers
  } 
  -> default is { empty object }
*/

const response = new Response(
  {
    name: 'Mahmoud Gad',
    age: 26,
    gig: 'JS Developer',
  },
  {
    status: 200,
    statusText: 'OK',
    headers: new Headers(new Map([
      ['h1', 'H1'],
      ['h2', 'H2'],
      ['h2', 'H2']
    ])),
  }
);

//===================================================================
// properties

// console.log(response.headers);
console.log(response.status);
console.log(response.statusText);
// console.log(response.body);
// console.log(response.bodyUsed);
// console.log(response.redirected);
// console.log(response.type);
// console.log(response.url);

//===================================================================
// mwthods

(async () => {
  // console.log(await response.text());
  // console.log(await response.arrayBuffer());
  // console.log(await response.blob());
  // console.log(await response.clone());
})();

//===================================================================

console.log('\n');