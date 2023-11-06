const log = console.log; // alias
"use strict";
console.time("T");
log("\n");


//=====================================================

function checkRoot(S) {
  const ns=S.split(",")
  if(ns.length!==4||ns.some(v=>isNaN(v)||v<1)) return 'incorrect input'
  if((ns[1]-ns[0])*(ns[2]-ns[1])*(ns[3]-ns[2]) !== 1) return "not consecutive"
  return`${ns.reduce((t,n)=>t*n)+1}, ${ns[0]*ns[3]+1}`
}

log(checkRoot("S,2,3,4"));
log(checkRoot("1,2,S,5"));
log(checkRoot("1,2,3,5"));
log(checkRoot("1,4,3,2"));
log(checkRoot("0,1,2,3"));
log(checkRoot("1,2,3,4"));
log(checkRoot("10,11,12,13"));
log(checkRoot("20,21,22,23"));

//=====================================================
// Regex

const re = /; ?/g;
const st = `Mahmoud Gad; Amira Gad; Mohammed Gad`;

// log("replace() =>", st.split(re));
// log("replace() =>", st.replace(re, "$<lastName> $<firstName>"));
// log("replace() =>", st.replaceAll(re, "$<lastName> $<firstName>"));
// log("search() =>", st.search(re));
// log("Match() =>", st.match(re));
// log("MatchAll() =>", [...st.matchAll(re)]);
// log("exec() =>", re.exec(st));
// log("test() =>", re.test(st));
// log("lastIndex =>", re.lastIndex);

//=====================================================


log("\n");
console.timeEnd("T");