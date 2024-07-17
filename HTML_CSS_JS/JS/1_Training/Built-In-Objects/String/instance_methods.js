const log = console.log;

log('\nat()');
log('--------------------------------------\n');

const get_last_char = (S) => S.at(-1);

log(get_last_char("Mahmoud"));

log('\nisWellFormed() - toWellFormed()');
log('--------------------------------------\n');

const a = [
  // Lone leading surrogate
  "ab\uD800",
  "ab\uD800c",
  // Lone trailing surrogate
  "\uDFFFab",
  "c\uDFFFab",
  // Well-formed
  "abc",
  "ab\uD83D\uDE04c",
  "\u{1F60E}",
  "\uD83D\uDE0E",
];

for (const s of a) log(s, '->', s.isWellFormed());
log();
for (const s of a) log(s, '->', s.toWellFormed().isWellFormed());

log('\ncharCodeAt() - charpointAt()')
log('--------------------------------------\n');

const b = [ '😎', '🥰', '😊', '😂' ];

for (const i of b) log(i.codePointAt(), '-', i.codePointAt().toString(16));
log();
log(String.fromCodePoint(...b.map(i => i.codePointAt())));

log('\npadStart() - padEnd()')
log('--------------------------------------\n');

log('abc'.padStart(10, '123456789.'));
log('abc'.padEnd(10, '.123456789'));

log('abc'.padStart(3, '123456789.'));
log('abc'.padEnd(3, '.123456789'));
log();

/**
 * @param {string} bn 16-digits bank number
 * @returns {string} the encrypted number ex: ************1234
 */
const encrypt_bank_num = (bn) => bn.slice(-4).padStart(16, '*');

const c = [
  '1657984365789246',
  '9876463289764751',
  '9756487541654897',
  '8794151897178741'
];

c.forEach(n => void(log(encrypt_bank_num(n))));
log();

/**
 * 
 * @param {string} pn phone number
 * @returns formatted phone number ex: +201097890670
 */
const eg_phone_num_frmt = (pn) => pn.length < 10 ? 'invalid phone number' : pn.padStart(13, '+20');

const d = [
  '01097890670',
  '1097890670',
  '201097890670',
  '097890670',
];

d.forEach(n => void(log(eg_phone_num_frmt(n))));

log('\n--------------------------------------\n');