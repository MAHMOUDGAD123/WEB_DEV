const log = console.log;

const _isMatch = (s, p) => {
  const match = new RegExp(p.replace(/\*+/, "*")).exec(s);
  return !!match && match[0] === s;
};

/**
 * @param {string} s test string
 * @param {string} p regex pattern
 * @returns {boolean}
 */
const isMatch = (s, p) => {
  let pi = 0, si = 0;
  const p_len = p.length, s_len = s.length;

  while (si < s_len && pi < p_len) {
    switch (p[pi]) {
      case '*':
        break;
      case '.':
      case s[si]:
        
    }
  }
  return true;
};

const __isMatch = (s, p) => {    
  const memo = new Map();
  
  const dfs = (i, j) => {
    // base case: end of the string
    if(i === s.length && j === p.length) return true;
    // base case: memo
    const key = `${i}-${j}`;
    if(memo.has(key)) return memo.get(key);

    // Check whether this character matches the pattern
    const isMatch = i < s.length && (p[j] === '*' || p[j] === '.' || p[j] === s[i]);

    // If the char is a '*', then we have 2 possibilities:
    // Either we repeat the star => consider it as a char and keep moving the ith index: (isMatch && dfs(i + 1, j)
    // or don't repeat the star => we consider '*' as empty string ('') and move skip one char: dfs(i, j + 1)
    // if 'j' is out of balance => we have to return false
    if(j + 1 < p.length && p[j + 1] === '*') { 
      memo.set(key, isMatch && dfs(i + 1, j) || dfs(i, j + 2));
    } 
    // Otherwise we simply match the character and continue onwards
    else memo.set(key, isMatch && dfs(i + 1, j + 1));
    
    return memo.get(key);
  }
  
  return dfs(0, 0);
};

const tests = [
  [["aa", "a"], false], // 1
  [["aa", "aa"], true], // 2
  [["aaa", "aaaa"], false], // 3
  [["aaa", "..."], true], // 4
  [["aaa", ".a"], false], // 5
  [["aa", "a*"], true], // 6
  [["aa", "a**"], true], // 7
  [["abc", "a***abc"], true], // 8
  [["aabc", "a***abc"], true], // 9
  [["aabc", "a***bc"], true], // 10
  [["aab", "c*a*b"], true], // 11
  [["abcd", "d*"], false], // 12
  [["aaa", "ab*a"], false], // 13
  [["ab", ".*"], true], // 14
  [["ab", ".*c"], false], // 15
  [["mississippi", "mis*is*p*."], false], // 16
];

log('\n---------------------------\n');

let i = 0;
tests.forEach(([[s, p], expected]) => {
  log(++i + '-', _isMatch(s, p) === expected ? '✅' : '❌',  __isMatch(s, p) === expected ? '✅' : '❌');
  log();
});

log('---------------------------\n');