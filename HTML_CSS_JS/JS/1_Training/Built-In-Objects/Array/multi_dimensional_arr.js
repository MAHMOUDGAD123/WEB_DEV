const log = console.log;

/**
 * @param {Array} arr
 * @returns {void}
 */
const print2DArray = (arr) => {
  for (let i = 0; i < arr.length; ++i) {
    let r = `Row[${i}] =>`;

    for (let j = 0; j < arr[i].length; ++j) {
      r += '  ' + arr[i][j];
    }
    log(r);
  }
};


log('\n---------------------------\n');

const mul_dim_arr = new Array(3);

for (let i = 0; i < mul_dim_arr.length; ++i) {
  mul_dim_arr[i] = new Array(3);

  for (let j = 0; j < mul_dim_arr[i].length; ++j) {
    mul_dim_arr[i][j] = `[${i}, ${j}]`;
  }
}


print2DArray(mul_dim_arr);

log('\n---------------------------\n');