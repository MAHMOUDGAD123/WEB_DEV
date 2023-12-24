"use strict";
console.log('\n');

// https://developer.mozilla.org/en-US/docs/Web/API/Request

//===================================================================
// Request constructor
// https://developer.mozilla.org/en-US/docs/Web/API/Request/Request

// new Request(input, options)
/*
  (1) - input -: string (URL) or another Request object
  (2) {optional} - options -: Headers {}
*/

const headers = new Headers({
  Id: 42839431,
  name: "Mahmoud Gad",
  age: 26,
});

const options = {
  method: 'POST',
  mode: 'cors',
  headers: headers, // can be a object literal with string values
  body: JSON.stringify({
    full_name: 'Mahmoud Abdelrahman Ismail Gad',
    gig: 'JS Developer',
  }),
};

const request = new Request(
  'https://api.github.com/users/MAHMOUDGAD123',
  options
);

// console.log(request);

//===================================================================
// Request Properties

// (1) Request.body

// (async () => {
//   for await (const e of request.body) console.log(e);
// })();

// (2) Request.method -> { GET, POST, PUT, DELETE, etc..... }

// console.log(request.method);

// (3) Request.mode -> { cors, no-cors, etc..... }

// console.log(request.mode);

// (4) Request.url

// console.log(request.url);

// more.......

//===================================================================
// Request Methods

// (1) Request.arrayBuffer()

// (async () => {
//   const buffer = await request.arrayBuffer();
//   console.log(buffer);
// })();

// (2) Request.blob()

// (async () => {
//   const blob = await request.blob();
//   // console.log(blob);
//   // console.log(await blob.arrayBuffer());
//   console.log(await blob.text());
//   // console.log(blob.stream());
// })();

// (3) Request.text()

// (async () => {
//   const txt = await request.text();
//   console.log(JSON.parse(txt));
// })();

// (4) Request.formData() - return a copy of the original request object

// console.log(request.clone());

// (5) Request.json()

// (async () => {
//   console.log(await request.json());
// })();

//===================================================================
// URL Object

const url = new URL(
  'https://MGBSP:42839431@www.example.com:8080/folder1/folder2/index.html?name="Mahmoud"&age=26#HTML_FILE',
  'https://www.example.com' // baseURL
);
console.log(url);
// console.log(url.toJSON());
// console.log(url.toString());

//===================================================================


console.log('\n');