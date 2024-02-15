const ball = document.getElementById("ball");

document.addEventListener("click", (e) => {
  ball.style.translate = `${e.clientX - 15}px ${e.clientY - 15}px`;
  console.log("x:", e.clientX, "y:", e.clientY);
});
