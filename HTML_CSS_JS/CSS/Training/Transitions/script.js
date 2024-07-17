const ball = document.getElementById("ball");
const box = document.getElementById("moving-ball");

box.addEventListener("click", (e) => {
  const ball_rect = ball.getBoundingClientRect();
  const x_pos = (e.clientX - box.offsetLeft - box.offsetWidth/2 - ball_rect.width/2);
  const y_pos = (e.clientY - box.offsetTop - box.offsetHeight/2 - ball_rect.height/2);
  ball.style.transform = "translate("+ x_pos + "px," + y_pos + "px)";
  console.log("x:", e.clientX, "y:", e.clientY);
});
