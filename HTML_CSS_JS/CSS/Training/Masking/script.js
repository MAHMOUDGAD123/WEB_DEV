const imgs_count = 10;
const min_zoom = 5;
const max_zoom = 100;
const zoom_adjust = 5;
const modes = ["no-repeat", "repeat", "round", "space", "repeat-x", "repeat-y"];
let img_num = 0;
let zoom = 50;
let mode = 0;

// swapper
const set_img_btns = () => {
  if (img_num === 0) {
    document.getElementById("leftBtn").classList.add("off");
  } else if (img_num === 9) {
    document.getElementById("rightBtn").classList.add("off");
  } else {
    document.getElementById("rightBtn").classList.remove("off");
    document.getElementById("leftBtn").classList.remove("off");
  }
};

document.getElementById("leftBtn").addEventListener("click", () => {
  document.getElementById(
    "img"
  ).style.maskImage = `url(../../Files/images/svg/${--img_num}.svg)`;
  document.getElementById("count").textContent = img_num;
  set_img_btns();
});

document.getElementById("rightBtn").addEventListener("click", () => {
  document.getElementById(
    "img"
  ).style.maskImage = `url(../../Files/images/svg/${++img_num}.svg)`;
  document.getElementById("count").textContent = img_num;
  set_img_btns();
});

// Zoom
const set_zoom_btns = () => {
  if (zoom === min_zoom) {
    document.getElementById("zoomOut").classList.add("off");
  } else if (zoom === max_zoom) {
    document.getElementById("zoomIn").classList.add("off");
  } else {
    document.getElementById("zoomOut").classList.remove("off");
    document.getElementById("zoomIn").classList.remove("off");
  }
};

document.getElementById("zoomOut").addEventListener("click", () => {
  document.getElementById("img").style.maskSize = `${(zoom -= zoom_adjust)}%`;
  document.getElementById("zoom").textContent = `x${zoom / 100}`;
  set_zoom_btns();
});

document.getElementById("zoomIn").addEventListener("click", () => {
  document.getElementById("img").style.maskSize = `${(zoom += zoom_adjust)}%`;
  document.getElementById("zoom").textContent = `x${zoom / 100}`;
  set_zoom_btns();
});

// mode
const set_mode_btns = () => {
  if (mode === 0) {
    document.getElementById("modeLeft").classList.add("off");
  } else if (mode === modes.length - 1) {
    document.getElementById("modeRight").classList.add("off");
  } else {
    document.getElementById("modeLeft").classList.remove("off");
    document.getElementById("modeRight").classList.remove("off");
  }
};

document.getElementById("modeLeft").addEventListener("click", () => {
  const val = modes[--mode];
  document.getElementById("img").style.maskRepeat = val;
  document.getElementById("mode").textContent = val;
  set_mode_btns();
});

document.getElementById("modeRight").addEventListener("click", () => {
  const val = modes[++mode];
  document.getElementById("img").style.maskRepeat = val;
  document.getElementById("mode").textContent = val;
  set_mode_btns();
});
