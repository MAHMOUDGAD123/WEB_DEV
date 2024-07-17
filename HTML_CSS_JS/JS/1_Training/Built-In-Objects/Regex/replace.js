const log = console.log;

log('-----------------------------------');

const S = '111 222 333';

log(S.replace(/(2+)/, "$$"));
log(S.replace(/(2+)/, "$& $&"));
log(S.replace(/(?<three>3+)/, "$<three> $<three>"));
log(S.replace(/(2+)/, "$`"));
log(S.replace(/(2+)/, "$'"));

log('-----------------------------------');