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

window.addEventListener("load", () => {
  reset_buts(size_but_name, size_buttons_no);
  reset_buts(color_but_name, color_buttons_no);
});

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
__resizing_coloring();

// Resize Text End
//===============================================================
