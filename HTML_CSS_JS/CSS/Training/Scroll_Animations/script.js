// img-5 styling
// ---------------------------------------------
const img_5 = document.querySelector(".img-5");

const view_timeline = new ViewTimeline({
  subject: img_5,
  axis: "block",
  inset: [CSS.percent(40), CSS.percent(0)],
});

img_5.animate(
  // [
  //   {
  //     // from (0%)
  //     opacity: 0,
  //     transform: "rotateY(90deg)",
  //     offset: 0, // === from
  //   },
  //   {
  //     // to (100%)
  //     opacity: 1,
  //     transform: "rotateY(0)",
  //     offset: 1, // === to
  //   },
  // ],
  {
    opacity: [0, 1],
    transform: ["rotateY(90deg)", "rotateY(0)"],
  },
  {
    id: "img5",
    rangeStart: "contain",
    rangeEnd: "contain",
    timeline: view_timeline || null,
    easing: "linear",
    fill: "both",
  }
);
// ---------------------------------------------

// battery styling
// ---------------------------------------------
const h_battery_scroller = document.querySelector(".battery.H > .scroller");
const v_battery_scroller = document.querySelector(".battery.V > .scroller");

const horizontal_scroll = () => {
  const width = h_battery_scroller.clientWidth;
  const scrollWidth = h_battery_scroller.scrollWidth - width;
  const scrollLeft = h_battery_scroller.scrollLeft;
  const percent = Math.floor((scrollLeft / scrollWidth) * 100);
  document.querySelector(
    ".battery.H > .battery-percent"
  ).textContent = `${percent}%`;
};

const vertical_scroll = () => {
  const height = v_battery_scroller.clientHeight;
  const scrollHeight = v_battery_scroller.scrollHeight - height;
  const scrollTop = v_battery_scroller.scrollTop;
  const percent = Math.floor((scrollTop / scrollHeight) * 100);
  document.querySelector(
    ".battery.V > .battery-percent"
  ).textContent = `${percent}%`;
};

h_battery_scroller.addEventListener("scroll", horizontal_scroll);
v_battery_scroller.addEventListener("scroll", vertical_scroll);
// ---------------------------------------------

// date picker
// ---------------------------------------------
const year = document.getElementById("_year");
const month = document.getElementById("_month");
const day = document.getElementById("_day");
const outputDate = document.getElementById("outputDate");
let curr_year_index = 1;
let curr_month_index = 1; // 1 -> 12
let curr_day_index = 1; // 1 -> 31
let previous_days_count = 0; // to save the previous days count before change (month or year)
const start_year = 1997;
const choice_color = "#4169e1";
const default_color = "#fff";
const inputs_bounds = document.getElementById("inputs").getBoundingClientRect();
const pick_line = inputs_bounds.top + (inputs_bounds.height >>> 1);

const days_map = new Map([
  [1, 31],
  [2, 28],
  [3, 31],
  [4, 30],
  [5, 31],
  [6, 30],
  [7, 31],
  [8, 31],
  [9, 30],
  [10, 31],
  [11, 30],
  [12, 31],
]);

const isLeap = (year) => {
  return !(year % 400) || (!(year % 4) && !(year % 100));
};

const get_year = (index) => {
  return index + start_year - 1;
};

const reset_previous = (parent, index) => {
  parent.childNodes[index].style.color = default_color;
};

const set_output = (y, m, d) => {
  outputDate.innerText = new Date(y, m - 1, d).toLocaleString("en-us", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  if (y === 1997 && m === 9 && d === 10) {
    outputDate.innerText += "\nMy Birthday 😊";
  }
};

const set_previous_day = () => {
  // [1] if curr_day_index is greater than the new list count - 2
  // set to day 1
  // [2] if else set to the previous choice
  if (curr_day_index > day.children.length - 2) {
    curr_day_index = 1;
  }
  const last_ele = day.childNodes[curr_day_index];
  last_ele.style.color = choice_color;
  last_ele.scrollIntoView({ behavior: "smooth", block: "center" });
  set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
};

const set_days = (month, year) => {
  // February - 28 days in a common year and 29 days in leap years
  const days_count =
    days_map.get(month) + (isLeap(year) && month === 2 ? 1 : 0);

  if (days_count !== previous_days_count) {
    previous_days_count = days_count; // save
    day.innerHTML = ""; // clear

    // add days
    day.innerHTML += `<li data-index = "${0}"></li>`;
    for (let d = 1; d <= days_count; ++d) {
      day.innerHTML += `<li data-index = "${d}">${d}</li>`;
    }
    day.innerHTML += `<li data-index = "${day.children.length}"></li>`;

    set_previous_day();

    // add click events to days
    day.childNodes.forEach((li) => {
      li.addEventListener("click", (e) => {
        const ele = e.target;
        reset_previous(ele.parentElement, curr_day_index);
        curr_day_index = +ele.dataset.index;
        ele.style.color = choice_color;
        set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
        ele.scrollIntoView({ bahavior: "smooth", block: "center" });
      });
    });
  }
};

const init_date_lists = () => {
  // add years
  const years_to = new Date().getFullYear();
  year.innerHTML += `<li data-index = "${0}"></li>`;
  for (let y = start_year; y <= years_to; ++y) {
    year.innerHTML += `<li data-index = "${y - start_year + 1}">${y}</li>`;
  }
  year.innerHTML += `<li data-index = "${year.children.length}"></li>`;

  // add months
  month.innerHTML += `<li data-index = "${0}"></li>`;
  for (let m = 1; m <= 12; ++m) {
    month.innerHTML += `<li data-index = "${m}">${m}</li>`;
  }
  month.innerHTML += `<li data-index = "${month.children.length}"></li>`;
  set_days(1, start_year);
  set_output(start_year, 1, 1);

  // coloring the current choices
  year.childNodes[1].style.color = choice_color;
  month.childNodes[1].style.color = choice_color;
  day.childNodes[1].style.color = choice_color;
};
init_date_lists();

// Events

// add click events to years
year.childNodes.forEach((li) => {
  li.addEventListener("click", (e) => {
    const ele = e.target;
    reset_previous(ele.parentElement, curr_year_index);
    curr_year_index = +ele.dataset.index;
    ele.style.color = choice_color;
    set_days(curr_month_index, get_year(curr_year_index));
    set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
    ele.scrollIntoView({ bahavior: "smooth", block: "center" });
  });
});

// add click event to months
month.childNodes.forEach((li) => {
  li.addEventListener("click", (e) => {
    const ele = e.target;
    reset_previous(ele.parentElement, curr_month_index);
    curr_month_index = +ele.dataset.index;
    ele.style.color = choice_color;
    set_days(curr_month_index, get_year(curr_year_index));
    set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
    ele.scrollIntoView({ bahavior: "smooth", block: "center" });
  });
});

// add scrollend event to year
year.addEventListener("scrollend", (e) => {
  const picker = e.target;
  const ele_count = picker.childElementCount;
  const list = picker.childNodes;

  for (let i = 1; i < ele_count; ++i) {
    const ele = list[i];
    const ele_bounds = ele.getBoundingClientRect();

    if (ele_bounds.top < pick_line && ele_bounds.bottom > pick_line) {
      reset_previous(ele.parentElement, curr_year_index);
      curr_year_index = +ele.dataset.index;
      ele.style.color = choice_color;
      set_days(curr_month_index, get_year(curr_year_index));
      set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
      break;
    }
  }
});

// add scrollend event to month
month.addEventListener("scrollend", (e) => {
  const picker = e.target;
  const ele_count = picker.childElementCount;
  const list = picker.childNodes;

  for (let i = 1; i < ele_count; ++i) {
    const ele = list[i];
    const ele_bounds = ele.getBoundingClientRect();
    if (ele_bounds.top < pick_line && ele_bounds.bottom > pick_line) {
      reset_previous(ele.parentElement, curr_month_index);
      curr_month_index = +ele.dataset.index;
      ele.style.color = choice_color;
      set_days(curr_month_index, get_year(curr_year_index));
      set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
      break;
    }
  }
});

// add scrollend event to day
day.addEventListener("scrollend", (e) => {
  const picker = e.target;
  const ele_count = picker.childElementCount;
  const list = picker.childNodes;

  for (let i = 1; i < ele_count; ++i) {
    const ele = list[i];
    const ele_bounds = ele.getBoundingClientRect();
    if (ele_bounds.top < pick_line && ele_bounds.bottom > pick_line) {
      reset_previous(ele.parentElement, curr_day_index);
      curr_day_index = +ele.dataset.index;
      ele.style.color = choice_color;
      set_output(get_year(curr_year_index), curr_month_index, curr_day_index);
      break;
    }
  }
});

const range_log = (ele_bounds, count) => {
  console.clear();
  console.log("-- element:", count);
  console.log("ele-top:", ele_bounds.top >>> 0);
  console.log("pick-line:", pick_line >>> 0);
  console.log("ele-bottom:", ele_bounds.bottom >>> 0);
};
// ---------------------------------------------
