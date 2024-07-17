const log = console.log;

log('-----------------------------------');

const re1 = /apple(,) orange\1/;
const s1 = 'apple, orange, cherry, peach';

log(re1.exec(s1));

const re2 = /(?<MG>\w+) \.\.\. \k<MG>/;
const s2 = 'my name is MG ... MG';

log(re2.exec(s2));

/**
 * @param {string} txt 
 * @returns {string[]}
 * detect quotes in the text
*/
const get_quotes = (txt) => {
  return txt.match(/(?<=(['"])).+(?=\1)/g);
}

log(get_quotes('the quote of the day is "Bullshit Is Shit"\n second quote of the day is "Shit Is Bullshit"'));

log('-----------------------------------');