/* Progress Start */

const progress = document.getElementById("progress");
window.addEventListener("scroll", () => {
  const winScroll =
  document.body.scrollTop || document.documentElement.scrollTop;
  const height =
  document.documentElement.scrollHeight -
  document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  progress.style.width = scrolled + "%";
});

/* Progress End */

/* Clock Start */

function frmt(n) {
  if (!n) return "00";
  return Math.floor(Math.log10(n)) ? n : "0" + n;
}

const hours = document.querySelector(".CDC.TM .hr");
const minutes = document.querySelector(".CDC.TM .min");
const seconds = document.querySelector(".CDC.TM .sec");

const intervTM = setInterval(function () {
  const D = new Date();

  const hrs = frmt(D.getHours());
  const mins = frmt(D.getMinutes());
  const secs = frmt(D.getSeconds());

  hours.innerHTML = hrs;
  minutes.innerHTML = mins;
  seconds.innerHTML = secs;
}, 1000);

/* Clock End */
