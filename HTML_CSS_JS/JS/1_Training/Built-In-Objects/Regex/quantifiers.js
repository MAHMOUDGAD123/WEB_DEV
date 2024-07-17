const log = console.log;

log('-----------------------------------');

const reg1 = /<.*>/; // greedy quantifier
const reg2 = /<.*?>/; // non-greedy quantifier

const s1 = '<aaa> <bbb> test <ccc> <ddd>'

log(reg1.exec(s1)); // match all
log(reg2.exec(s1)); // stop after the first match

log('-----------------------------------');