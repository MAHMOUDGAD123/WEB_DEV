const log = console.log;

log('\n==========================================\n');

/**
 * @param {RegExp} re 
 * @param {string} str 
 * @param {number} lastIndex 
 */
const re_test = (re, str) => {
  log('\n---------------------------\n');
  let C = 0;
  log('flags: ', re.flags || '\'\'');
  log('---- start ----');

  do {
    log('iteration: ', re.lastIndex);
    if (re.test(str)) C++;
  } while (re.lastIndex);

  log('----- end -----');
  log('lastIndex: ', re.lastIndex);
  log('matches: ', C);
};

const str = 'aaaaaabacadaeafa';

re_test(/a/, str);
re_test(/a/g, str);
re_test(/a/y, str);

log('\n---------------------------\n');

log('\n==========================================\n');