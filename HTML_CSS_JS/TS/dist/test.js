"use strict";
const log = console.log;
const obj = {
    1: 100,
    "2": "100",
    [Symbol.for("3")]: 123n,
};
log(obj);
