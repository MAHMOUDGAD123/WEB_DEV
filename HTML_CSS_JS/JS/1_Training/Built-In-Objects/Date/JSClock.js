setInterval(() => {
  const frmt = (n) => n > 9 ? n : '0' + n;
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  console.clear();
  console.log('\n', frmt(h > 12 ? h - 12 : h) + ':' + frmt(m) + ':' + frmt(s) + (h > 11 ? ' P.M.' : ' A.M.'), '\n');
}, 1000);