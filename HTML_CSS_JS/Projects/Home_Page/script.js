const progress = document.getElementById("progress");
const btt = document.getElementById("back-to-top");
const CD = document.querySelector(".CD");
const cont = document.getElementById("cont");
const icons = document.getElementById("icons").children;

const at_top_mode = () => {
  cont.style.marginTop = "350px";
  CD.style.marginTop = "200px";
  btt.style.display = "none";
  CD.style.opacity = 1;
  for (const i of icons) {
    i.style.opacity = 1;
  }
};

const scroll_mode = () => {
  cont.style.marginTop = "50px";
  CD.style.margin = 0;
  btt.style.display = "block";
  CD.style.opacity = 0;
  for (const i of icons) {
    i.style.opacity = 0;
  }
};

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY === 0) {
      at_top_mode();
    } else {
      scroll_mode();
    }

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
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

const hours = document.querySelector(".CD > .clock > .hr");
const minutes = document.querySelector(".CD > .clock > .min");
const seconds = document.querySelector(".CD > .clock > .sec");

const day = document.querySelector(".CD > .date > .dy");
const date = document.querySelector(".CD > .date > .dt");
const month = document.querySelector(".CD > .date > .mn");
const year = document.querySelector(".CD > .date > .yr");

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
  ["GPT", "https://chatgpt.com/"],
  ["facebook", "https://facebook.com/"],
  ["github", "https://github.com/"],
  ["git", "https://git-scm.com/docs"],
  ["x", "https://twitter.com/"],
  ["mdn", "https://developer.mozilla.org/"],
  ["linkedin", "https://linkedin.com"],
  ["stackoverflow", "https://stackoverflow.com/"],
  ["roadmap", "https://roadmap.sh/"],
  ["npm", "https://docs.npmjs.com/cli/v10/commands/npm"],
  ["react", "https://react.dev/"],
  ["typescript", "https://www.typescriptlang.org/docs/"],
  ["terminal", "https://ss64.com/"],
  ["programmingadvices", "https://programmingadvices.com/"],
  ["programiz", "https://www.programiz.com/"],
  ["colorcode", "https://www.colorcode.io/"],
  ["gfg", "https://www.geeksforgeeks.org/"],
  ["w3s", "https://www.w3schools.com/"],
  ["codewars", "https://www.codewars.com/"],
  ["leetcode", "https://leetcode.com/problemset/"],
  ["cpp", "https://en.cppreference.com/"],
  ["udemy", "https://udemy.com/"],
  ["edclub", "https://www.edclub.com/"],
  ["oxford", "https://www.oxfordlearnersdictionaries.com/"],
  ["mega", "https://mega.nz/fm/KsEinTTJ"],
  ["1337x", "https://1337x.to/"],
  ["dailymotion", "https://www.dailymotion.com/"],
  ["download", "https://www.yt1s.com/en2aef"],
  ["fontawesome", "https://fontawesome.com/"],
  ["flaticon", "https://www.flaticon.com/"],
  ["iconscout", "https://iconscout.com/"],
  ["alphacoders", "https://alphacoders.com/"],
  ["skrill", "https://www.skrill.com/"],
  ["paypal", "https://www.paypal.com/"],
  ["justpasteit", "https://justpaste.it/"],
  ["jumia", "https://www.jumia.com.eg/"],
  ["amazon", "https://www.amazon.eg/"],
]);

window.addEventListener("load", () => {
  at_top_mode();

  data.forEach((v, k) => {
    cont.innerHTML += `
    <a href="${v}" title="${k}">
      <img src="./imgs/${k}.png" alt="${k}" width="70"/>
    </a>
    `;
  });
});

/* Responsive content End */

// keyboard events
document.addEventListener("keydown", (e) => {
  if (e.shiftKey && !e.ctrlKey) {
    switch (e.code) {
      case "KeyS":
        window.open("https://google.com/", "_blank");
        break;
      case "KeyY":
        window.open("https://youtube.com/", "_blank");
        break;
      case "KeyT":
        window.open("https://translate.google.com/", "_blank");
        break;
      case "KeyF":
        window.open("https://facebook.com/", "_blank");
        break;
      case "KeyX":
        window.open("https://twitter.com/", "_blank");
        break;
      case "KeyG":
        window.open("https://github.com/", "_blank");
        break;
      case "KeyM":
        window.open("https://developer.mozilla.org/", "_blank");
        break;
      case "KeyD":
        window.open("https://en.savefrom.net/", "_blank");
        break;
      case "KeyR":
        window.open("https://roadmap.sh/", "_blank");
        break;
      case "KeyU":
        window.open("https://udemy.com/", "_blank");
        break;
    }
  }
});
