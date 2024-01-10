const progress = document.getElementById("progress");
const btt = document.querySelector(".back-to-top");
const TM = document.querySelector(".TM");
const cont = document.getElementById("cont");
const icons = document.querySelector(".icons").children;

const at_top_mode = () => {
  cont.style.marginTop = "350px";
  TM.style.marginTop = "200px";
  btt.style.display = "none";
  TM.style.opacity = 1;
  for (const i of icons) {
    i.style.opacity = 1;
  }
};

const scroll_mode = () => {
  cont.style.marginTop = "50px";
  TM.style.margin = 0;
  btt.style.display = "block";
  TM.style.opacity = 0;
  for (const i of icons) {
    i.style.opacity = 0;
  }
};

window.addEventListener(
  "load",
  () => {
    at_top_mode();
  },
  true
);

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY === 0) {
      at_top_mode();
    } else {
      scroll_mode();
    }
  },
  true
);

/* Clock-Date Start */

const frmt = (n) => {
  if (!n) return "00";
  return Math.floor(Math.log10(n)) ? n : "0" + n;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const hours = document.querySelector(".TM > .clock > .hr");
const minutes = document.querySelector(".TM > .clock > .min");
const seconds = document.querySelector(".TM > .clock > .sec");

const day = document.querySelector(".TM > .date > .dy");
const date = document.querySelector(".TM > .date > .dt");
const month = document.querySelector(".TM > .date > .mn");
const year = document.querySelector(".TM > .date > .yr");

setInterval(() => {
  const D = new Date();
  const hrs = frmt(D.getHours());
  const mins = frmt(D.getMinutes());
  const secs = frmt(D.getSeconds());
  const mon = D.getMonth();
  const dt = D.getDate();
  const wd = D.getDay();
  const yr = D.getFullYear();

  hours.textContent = hrs;
  minutes.textContent = mins;
  seconds.textContent = secs;
  day.textContent = days[wd] + ",";
  date.textContent = dt;
  month.textContent = months[mon];
  year.textContent = yr;
}, 1000);

/* Clock-Date End */

/* Responsive content Start */

const data = new Map([
  ["google", "https://google.com/"],
  ["youtube", "https://youtube.com/"],
  ["google_trans", "https://translate.google.com/"],
  ["gmail", "https://mail.google.com/"],
  ["facebook", "https://facebook.com/"],
  ["github", "https://github.com/"],
  ["x", "https://twitter.com/"],
  ["mdn", "https://developer.mozilla.org/"],
  ["linkedin", "https://linkedin.com"],
  ["stackoverflow", "https://stackoverflow.com/"],
  ["roadmap", "https://roadmap.sh/"],
  ["programmingadvices", "https://programmingadvices.com/"],
  ["programiz", "https://www.programiz.com/"],
  ["gfg", "https://www.geeksforgeeks.org/"],
  ["w3s", "https://www.w3schools.com/"],
  ["codewars", "https://www.codewars.com/"],
  ["leetcode", "https://leetcode.com/problemset/"],
  ["cpp", "https://en.cppreference.com/"],
  ["udemy", "https://www.udemy.com/"],
  ["edclub", "https://www.edclub.com/"],
  ["oxford", "https://www.oxfordlearnersdictionaries.com/"],
  ["mega", "https://mega.nz/fm/KsEinTTJ"],
  ["1337x", "https://1337x.to/"],
  ["dailymotion", "https://www.dailymotion.com/"],
  ["savefrom", "https://en.savefrom.net/"],
  ["flaticon", "https://www.flaticon.com/"],
  ["iconscout", "https://iconscout.com/"],
  ["alphacoders", "https://alphacoders.com/"],
  ["skrill", "https://www.skrill.com/"],
  ["paypal", "https://www.paypal.com/"],
  ["justpasteit", "https://justpaste.it/"],
  ["jumia", "https://www.jumia.com.eg/"],
  ["amazon", "https://www.amazon.eg/"],
]);

addEventListener("load", () => {
  data.forEach((v, k) => {
    cont.innerHTML += `
    <a href="${v}" title="${k}">
      <img src="./imgs/${k}.png" alt="${k}" width="70"/>
    </a>
    `;
  });
});

/* Responsive content End */
