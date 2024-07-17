const log = console.log;

log('-----------------------------------');

const S = 'Mahmoud 1 Amira 2 Mohammed 3 Reem 4 Gad 5 Ali';

log(S.split(/ \d /)); // only matches included
log(S.split(/( \d )/)); // capture groups included too

log('-----------------------------------');