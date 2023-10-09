const log = console.log; // alias

log("\n\n");
//=====================================================
// Playground Start
("use strict");

const numbers = {
  length: 9,
  vals: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  sum: 0,

  // get the priitive value of the object
  // but here we will return the sum of the array
  [Symbol.toPrimitive](hint) {
    if (hint[0] === "n")
      return this.sum ? this.sum 
                      : (this.sum = this.vals.reduce((v, curr) => v + curr));
    return null;
  },

  // make numbers iteratable
  // to make it support ( for..of ) loop ( like ranged-for in c++ )
  [Symbol.iterator]() {
    let i = -1;
    done = false;
    return {
      next() {
        if (++i === numbers.length) done = true;
        return { value: numbers.vals[i], done: done };
      }
    };  
  },
};


// for (const val of numbers) log(val);

log(numbers.sum);
log(+numbers);
log(numbers.sum);
log(+numbers);

// Playground End
//=====================================================
log("\n\n");
