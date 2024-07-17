const log = console.log;

log('\n---------------------------------\n');

// Object.groupBy() vs Map.groupBy()

const inventory = [
  { name: 'asparagus', type: 'vegetables', quantity: 9 },
  { name: 'tomato', type: 'vegetables', quantity: 4 },
  { name: 'bananas', type: 'fruit', quantity: 5 },
  { name: 'goat', type: 'meat', quantity: 23 },
  { name: 'cherries', type: 'fruit', quantity: 12 },
  { name: 'fish', type: 'meat', quantity: 22 },
];

const map = Map.groupBy(inventory, ({ type }) => type);
const obj = Object.groupBy(inventory, ({ type }) => type);

log(map);
log();
log(obj);

log('\n---------------------------------\n');
