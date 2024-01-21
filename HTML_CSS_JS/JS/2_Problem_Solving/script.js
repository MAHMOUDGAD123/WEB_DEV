const toCamelCase = (s) => {
  // (1)
  // return s.split(/[-_]/g).reduce((cC, v) => cC + v[0].toUpperCase() + v.slice(1));

  // (2)
  // return s.replace(/[-_]([A-Za-z0-9])/g, (_, ch) => ch.toUpperCase());

  // (3)
  return s.replace(/[-_]./g, (m) => m[1].toUpperCase());
};

const arr = [
  "mahmoud-gad_sad_mad",
  "the-stealth-warrior",
  "The_Stealth_Warrior",
  "",
  "A-B-C",
];

arr.forEach((s) => console.log(toCamelCase(s)));
