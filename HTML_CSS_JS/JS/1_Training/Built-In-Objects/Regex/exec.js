const log = console.log;

log('\n==========================================\n');

const S = "mix FIX Trix opix six trex dix bix";
const re = /(?<_ix>\wix)/gdi;

log(re.exec(S));
log('\n-> lastIndex:', re.lastIndex, '\n');
log(`>>>> found [${(() => { let C = 0; while (re.exec(S)) C++; return C; })()}] matches not [7]\n`);
log('-> lastIndex:', re.lastIndex);

log('\n==========================================\n');

/**
 * @param {string} str 
 * @returns {object | null}
*/
const get_names_phones = (str) => {
  log('\n---------------------------\n');
  const re = /(?<name>[a-z]+) (?:<?-*>?) \(?(?<number>(?:\+\d)?\d{11})\)?/gi;
  let match = null;
  const numbers = [];
  let C = 0;

  while ((match = re.exec(str))) {
    numbers.push({
      name: match[1].toUpperCase(),
      number: match[2]
    });
    C++;
  }
  return {
    numbers,
    count: C,
  }
};

const str = `
Mg -> (+201097890670),
MeRa <-> +201021743008,
Mo - (+201013171345,
MuM -- (+201090019225),
`;

log(get_names_phones(str));

log('\n---------------------------\n');

log('\n==========================================\n');