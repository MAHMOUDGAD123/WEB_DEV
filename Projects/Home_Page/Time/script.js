/* Date Count-Down Start */

const __to = "sep 10, 2024 00:00:00";
const __date = new Date(__to).getTime();

const frmt = (n) => {
  if (!n) return "00";
  return Math.floor(Math.log10(n)) ? n : "0" + n;
};

setInterval(() => {
  const ms_dy = 1000 * 60 * 60 * 24;
  const ms_hr = 1000 * 60 * 60;
  const ms_min = 1000 * 60;
  const ms_sec = 1000;

  const now = Date.now();
  const dif = __date - now;

  const dys = Math.floor(dif / ms_dy);
  const hrs = Math.floor((dif % ms_dy) / ms_hr);
  const mins = Math.floor((dif % ms_hr) / ms_min);
  const secs = Math.floor((dif % ms_min) / ms_sec);

  document.querySelector(".CDC.CD .till").textContent = __to;

  const __remaining_time = document.querySelector(".CDC.CD .rem-time");

  __remaining_time.textContent =
    dys + "d " + frmt(hrs) + "h " + frmt(mins) + "m " + frmt(secs) + "s";

  if (dif <= 0) {
    clearInterval(intervCD);
    __remaining_time.textContent = "EXPIRED";
    __remaining_time.style.color = "red";
  }
}, 1000);

/* Date Count-Down End */

/* Clock Start */

setInterval(() => {
  const D = new Date();

  const hrs = frmt(D.getHours());
  const mins = frmt(D.getMinutes());
  const secs = frmt(D.getSeconds());

  document.querySelector(".CDC.TM .loc-time").textContent = "Local Time";
  document.querySelector(".CDC.TM .hr").textContent = hrs;
  document.querySelector(".CDC.TM .min").textContent = mins;
  document.querySelector(".CDC.TM .sec").textContent = secs;
}, 1000);

/* Clock End */
