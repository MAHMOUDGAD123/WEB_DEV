// Date Count-Down & Clock Start
//===============================================================
/* Date Count-Down */
const __to = "sep 10, 2024 00:00:00";
// var date = new Date(2023, 8, 11, 18, 0, 0, 0).getTime();
const __date = new Date(__to).getTime();

const intervCD = setInterval(function () {
  const ms_dy = 1000 * 60 * 60 * 24;
  const ms_hr = 1000 * 60 * 60;
  const ms_min = 1000 * 60;
  const ms_sec = 1000;

  // const now = Date().getTime();
  const now = Date.now();
  const dif = __date - now;

  const dys = Math.floor(dif / ms_dy);
  const hrs = Math.floor((dif % ms_dy) / ms_hr);
  const mins = Math.floor((dif % ms_hr) / ms_min);
  const secs = Math.floor((dif % ms_min) / ms_sec);

  document.querySelector(".CDC.CD .till").innerHTML = __to;

  const __remaining_time = document.querySelector(".CDC.CD .rem-time");

  __remaining_time.innerHTML =
    dys + "d " + hrs + "h " + mins + "m " + secs + "s";

  if (dif <= 0) {
    clearInterval(intervCD);
    __remaining_time.innerHTML = "EXPIRED";
    __remaining_time.style.color = "red";
  }
}, 1000);

/* Clock */
function frmt(n) {
  if (!n) return "00";
  return Math.floor(Math.log10(n)) ? n : "0" + n;
}

const intervTM = setInterval(function () {
  const D = new Date();

  const hrs = frmt(D.getHours());
  const mins = frmt(D.getMinutes());
  const secs = frmt(D.getSeconds());

  document.querySelector(".CDC.TM .loc-time").innerHTML = "Local Time";
  document.querySelector(".CDC.TM .hr").innerHTML = hrs;
  document.querySelector(".CDC.TM .min").innerHTML = mins;
  document.querySelector(".CDC.TM .sec").innerHTML = secs;
}, 1000);

// Date Count-Down & Clock End
//===============================================================

// Resize Text Start
//===============================================================
const size_but_name = "sz-";
const color_but_name = "col-";
const size_buttons_no = 10;
const color_buttons_no = 4;
const but_bg_col = "red";
const but_txt_col = "white";

function reset_buts(but_name, n) {
  for (let i = 1; i <= n; ++i) {
    const __b = document.getElementById(but_name + i);
    __b.style.color = but_txt_col;
    __b.style.backgroundColor = but_bg_col;
  }
}

function resize(size, but_num) {
  return function () {
    // resize text
    const __t = document.getElementById("text");
    __t.style.fontSize = `${size}px`;
    // reset all buttons first
    reset_buts(size_but_name, size_buttons_no);
    // then make the button clicked
    const __b = document.getElementById(size_but_name + but_num);
    __b.style.color = but_bg_col;
    __b.style.backgroundColor = but_txt_col;
  };
}

function ch_color(color, but_num) {
  return function () {
    // change text color
    const __t = document.getElementById("text");
    __t.style.color = color;
    // reset all buttons first
    reset_buts(color_but_name, color_buttons_no);
    // then make the button clicked
    const __b = document.getElementById(color_but_name + but_num);
    __b.style.color = but_bg_col;
    __b.style.backgroundColor = but_txt_col;
  };
}

function __resizing_coloring() {
  // size
  document.getElementById(size_but_name + 1).onclick = resize(10, 1);
  document.getElementById(size_but_name + 2).onclick = resize(20, 2);
  document.getElementById(size_but_name + 3).onclick = resize(30, 3);
  document.getElementById(size_but_name + 4).onclick = resize(40, 4);
  document.getElementById(size_but_name + 5).onclick = resize(50, 5);
  document.getElementById(size_but_name + 6).onclick = resize(60, 6);
  document.getElementById(size_but_name + 7).onclick = resize(70, 7);
  document.getElementById(size_but_name + 8).onclick = resize(80, 8);
  document.getElementById(size_but_name + 9).onclick = resize(90, 9);
  document.getElementById(size_but_name + 10).onclick = resize(100, 10);
  // color
  document.getElementById(color_but_name + 1).onclick = ch_color("pink", 1);
  document.getElementById(color_but_name + 2).onclick = ch_color(
    "blueviolet",
    2
  );
  document.getElementById(color_but_name + 3).onclick = ch_color("green", 3);
  document.getElementById(color_but_name + 4).onclick = ch_color("yellow", 4);
}
// __resizing_coloring();

// Resize Text End
//===============================================================

// Template Literals Challenge Start
//===============================================================

const __info = [
  { name: "No_Body", age: 26, gig: "Fullstack Dev" },
  { name: "No_Body", age: 26, gig: "Java Dev" },
  { name: "No_Body", age: 25, gig: "Web Dev" },
  { name: "No_Body", age: 23, gig: "Mobile Dev" },
];

function __makeCards() {
  document.body.innerHTML += `<div id="_cardsBox"></div>`;

  for (let i = 0, person; i < __info.length; ++i) {
    person = __info[i];

    document.getElementById("_cardsBox").innerHTML += `
      <div id="_card${i + 1}">
        <div id="_label${i + 1}">
          <span id="l_name${i + 1}">name</span>
          <span id="l_age${i + 1}">age</span>
          <span id="l_gig${i + 1}">gig</span>
        </div>
        <span id="_num${i + 1}">${i + 1}</span>
        <p id="_name">${person.name}_${i + 1}</p>
        <p id="_age">${person.age}</p>
        <span id="_gig">${person.gig}</span>
      </div>
      `;
  }
}
// __makeCards();

function __format_elements() {
  // _cards format
  const __cards = document.getElementById("_cardsBox");
  __cards.style.padding = "30px";
  __cards.style.margin = "50px auto";
  __cards.style.width = "90%";
  __cards.style.display = "flex";
  __cards.style.gap = "40px";
  __cards.style.flexFlow = "row wrap";
  __cards.style.justifyContent = "space-evenly";
  __cards.style.color = "#fff";

  for (let i = 0; i < __info.length; ++i) {
    const __card = document.getElementById(`_card${i + 1}`);
    const __num = document.getElementById(`_num${i + 1}`);
    const __label = document.getElementById(`_label${i + 1}`);
    const l_name = document.getElementById(`l_name${i + 1}`);
    const l_age = document.getElementById(`l_age${i + 1}`);
    const l_gig = document.getElementById(`l_gig${i + 1}`);
    // title format
    __label.style.display = "flex";
    __label.style.flexFlow = "column nowrap";
    __label.style.justifyContent = "space-evenly";
    __label.style.left = "-10px";
    __label.style.position = "absolute";
    __label.style.width = "70px";
    __label.style.height = "330px";
    __label.style.fontSize = "20px";
    // title childs format
    l_name.style.backgroundColor =
      l_age.style.backgroundColor =
      l_gig.style.backgroundColor =
        "#c1081b";

    l_name.style.padding = l_age.style.padding = l_gig.style.padding = "5px";

    l_name.style.borderRadius =
      l_age.style.borderRadius =
      l_gig.style.borderRadius =
        "10px";

    // _card fromat
    __card.style.position = "relative";
    __card.style.display = "flex";
    __card.style.fontSize = "30px";
    __card.style.flexFlow = "column nowrap";
    __card.style.justifyContent = "space-evenly";
    __card.style.borderRadius = "30px";
    __card.style.backgroundColor = "#0084e8";
    __card.style.width = "350px";
    __card.style.height = "400px";
    __card.style.padding = "30px";
    __card.style.marginBlock = "30px";
    __card.style.textAlign = "center";
    // _num format
    __num.style.position = "absolute";
    __num.style.top = "-10%";
    __num.style.alignSelf = "center";
    __num.style.backgroundColor = "#c1081b";
    __num.style.width = "70px";
    __num.style.height = "70px";
    __num.style.borderRadius = "50%";
    __num.style.lineHeight = "70px";
  }
}
// __format_elements();

// Template Literals Challenge End
//===============================================================





