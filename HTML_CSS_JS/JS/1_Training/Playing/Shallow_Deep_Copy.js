const log = console.log;
const proto = Object.getPrototypeOf;
log();
// ===========================================================

const O = {};

const set_O = () => {
  O.name = "MG";
};

const update_O = () => {
  O.name = "Mera";
};

// Referencing
log("# Referencing/");
log("----------------------------------------");
set_O();
O2 = O;
update_O();
log("- O.name:", O.name);
log("- O2.name:", O2.name);
log("----------------------------------------");

// Shallow Copy An Object
log("# Shallow Copy using (assign)/");
log("----------------------------------------");
set_O();
const O3 = Object.assign({}, O);
update_O();
log("- O.name:", O.name);
log("- O3.name:", O3.name);
log("----------------------------------------");
log("# Shallow Copy using (...)/");
log("----------------------------------------");
set_O();
const O4 = { ...O };
update_O();
log("- O.name:", O.name);
log("- O4.name:", O4.name);
log("----------------------------------------");

// Deep Copy Of An Object
log("# Deep Copy using (JSON)/");
set_O();
const O5 = JSON.parse(JSON.stringify(O));
update_O();
log("----------------------------------------");
log("- O.name:", O.name);
log("- O5.name:", O5.name);
log("----------------------------------------");
log("# Deep Copy using (structuredClone)/");
set_O();
const O6 = structuredClone(O);
update_O();
log("----------------------------------------");
log("- O.name:", O.name);
log("- O6.name:", O6.name);
log("----------------------------------------");

// ===========================================================
log();
