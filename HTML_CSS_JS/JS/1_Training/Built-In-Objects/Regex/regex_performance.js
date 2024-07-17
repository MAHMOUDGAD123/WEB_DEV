const log = console.log;
const t = console.time;
const te = console.timeEnd;

log('\n------------------------------\n');

const re = /\d{3}$/;
const s = 'sdfsl;dkflksdlfsuiusdkgsjgksdjgiogojnfdklgjdklfgjirjgfgdkj111';
const n = 10000000;
let i = n;

/**
 * @param {string} s
 * @returns {boolean}
 */
const test = (s) => {
  for (let i = s.length - 1; i; --i) {
    const c1 = s.charCodeAt(i);
    if (i - 2 > -1 && c1 > 47 && c1 < 58) {
      const c2 = s.charCodeAt(i - 1);
      const c3 = s.charCodeAt(i - 2);
      if(c2 > 47 && c2 < 58 && c3 > 47 && c3 < 58) return true;
    }
  }
  return false;
};

// log(test(s));
// log(re.test(s));

t('1');

while (--i) test(s);

te('1');

i = n;

t('2');

while (--i) re.test(s);

te('2');

log('\n------------------------------\n');