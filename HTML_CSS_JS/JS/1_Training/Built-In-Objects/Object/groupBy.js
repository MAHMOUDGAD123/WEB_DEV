const log = console.log;

log('\n-----------------------------\n');

const arr = [
  { name: 'Mahmoud', team: 'A' },
  { name: 'Ali', team: 'B' },
  { name: 'Ali', team: 'C' },
  { name: 'Mera', team: 'A' },
  { name: 'Reem', team: 'B' },
  { name: 'Sama', team: 'C' },
  { name: 'Samy', team: 'A' },
];

const grouped = Object.groupBy(arr, ({ team }) => team);
log(grouped);

log('\n-----------------------------\n');