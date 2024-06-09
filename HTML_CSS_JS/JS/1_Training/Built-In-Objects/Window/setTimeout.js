function countdown(n) {
  console.log("\nCountdown:");
  for(let i = n; i >= 0; --i) {
    setTimeout(() => {
      console.log(!i ? "GO!" : i);
    }, (n - i) * 1000);
  }
}

countdown(5);
setTimeout(countdown, 5000, 10);