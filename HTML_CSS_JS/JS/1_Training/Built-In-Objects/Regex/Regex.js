const log = console.log;

log('\n------------------------------\n');

const aor = [
  /regex1/,
  /regex2/gm,
  RegExp(/regex3/, 'gm'),
  new RegExp('regex4', 'gm'),
  new RegExp('regex5'),
  RegExp('regex6'),
  RegExp(/regex7/),
];

// for (const re of aor) {
//   log(re);
// }

const names = ['Mahmoud', 'Gad', 'Ali', 'Mera', 'Reem', 'Ahmed'];
const txt = 'Mahmoud called Mera to invit Ali, Reem, Gad and Ahmed to his party';

/**
 * @param {string} txt
 * @returns {string[]}
 */
const get_names = (txt) => txt.match(new RegExp(`\\b(?:${names.join('|')})\\b`, 'g'));

log(get_names(txt));

log('\n------------------------------\n');