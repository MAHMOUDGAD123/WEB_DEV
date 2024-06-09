// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator

const log = console.log;

const O1 = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (++i > 10) return { value: undefined, done: true, };
        return { value: "😂", done: false, };
      },
      return() {
        return { value: undefined, done: true, };
      }
    };
  },
};

// for (const v of O1) log(v);
// log();
// log(...O1);

//---------------------------------------

const O2 = {
  // [Symbol.iterator]: function* () {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

// log(...O2);
// for (const v of O2) log(v);

//---------------------------------------
const arr = [1, 2, 3];

const arr_like = {
  "0": "Mahmoud",
  "1": "26",
  "2": "Male",
  "3": "Mansoura",
};

Object.defineProperties(arr_like, {
  [Symbol.isConcatSpreadable]: {
    value: true,
  },
  length: {
    value: Object.keys(arr_like).length,
  },
  [Symbol.iterator]: {
    // value: function () {
    //   let i = -1;
    //   return {
    //     next() {
    //       return ++i < arr_like.length 
    //         ? { value: arr_like[i], done: false, }
    //         : { value: undefined, done: true, };
    //     },
    //   };
    // },
    value: function* () {
      let i = -1;
      while (++i < arr_like.length) yield arr_like[i];
    }
  },
});

// log(...arr_like);
log(arr.concat(arr_like));

//---------------------------------------
