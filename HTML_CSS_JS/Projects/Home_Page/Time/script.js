/* Clock & Date Count-Down Start */

const frmt = (n) => {
  if (!n) return "00";
  return Math.floor(Math.log10(n)) ? n : "0" + n;
};

const clock_hr = document.querySelector(".CLC > .hr");
const clock_min = document.querySelector(".CLC > .min");
const clock_sec = document.querySelector(".CLC > .sec");

const __to = "Nov 31, 2024 00:00:00";
const __date = new Date(__to).getTime();

const expire_date = document.querySelector(".CD > #title");
const CD_dys = document.querySelector(".CD > #dys");
const CD_hrs = document.querySelector(".CD > #hrs");
const CD_mins = document.querySelector(".CD > #min");
const CD_secs = document.querySelector(".CD > #sec");

expire_date.textContent = __to;

const intervID = window.setInterval(() => {
  // clock
  const D = new Date();
  const hr = frmt(D.getHours());
  const min = frmt(D.getMinutes());
  const sec = frmt(D.getSeconds());

  clock_hr.textContent = hr;
  clock_min.textContent = min;
  clock_sec.textContent = sec;

  // count down
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

  CD_dys.textContent = `${dys}d`;
  CD_hrs.textContent = `${frmt(hrs)}h`;
  CD_mins.textContent = `${frmt(mins)}m`;
  CD_secs.textContent = `${frmt(secs)}s`;

  if (dif <= 0) {
    document.querySelectorAll(".CD > span").forEach((ele) => {
      ele.style.display = "none";
      document.querySelector(".CD > #expired-msg").style.display = "unset";
      clearInterval(intervID);
    });
  }
}, 1000);

/* ClocK & Date Count-Down End */
