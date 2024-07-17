const log = console.log;

/**
 * @param {string} S1 
 * @param {string} S2 
 * @returns {boolean}
 */
const normal_cmp_u = (S1, S2) => S1.toUpperCase() === S2.toUpperCase();
const normal_cmp_l = (S1, S2) => S1.toLowerCase() === S2.toLowerCase();
const normal_cmp_ll = (S1, S2, locale) => S1.toLocaleLowerCase(locale) === S2.toLocaleLowerCase(locale);
const normal_cmp_lu = (S1, S2, locale) => S1.toLocaleUpperCase(locale) === S2.toLocaleUpperCase(locale);

/**
 * @param {string} S1 
 * @param {string} S2 
 * @returns {boolean}
 */
const locale_cmp = (S1, S2, locale) => !S1.localeCompare(S2, locale, { sensitivity: 'accent' });

log('\n-----------------------------\n');

const pairs = [
  ['ß', 'ss', ['de', 'German']], // German
  ['ı', 'I', ['tr', 'Turkish']], // Turkish
];

for (let i = 0; i < pairs.length; ++i) {
  const [S1, S2, [locale, name]] = pairs[i];
  log(`(${S1}) <=> (${S2}) (${name})`);
  log('normal_cpm_u -->', normal_cmp_u(S1, S2));
  log('normal_cpm_l -->', normal_cmp_l(S1, S2));
  log('normal_cpm_ll ->', normal_cmp_ll(S1, S2, locale));
  log('normal_cpm_lu ->', normal_cmp_lu(S1, S2, locale));
  log('locale_cmp ---->', locale_cmp(S1, S2, locale));
  log();
}

log('\n-----------------------------\n');