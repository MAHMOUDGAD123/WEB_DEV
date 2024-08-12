// set the page theme
const mode = window.localStorage.getItem("l-d") || "d";
(() => {
  if (mode === "d") {
    document.body.classList.remove("light-bg");
    document.body.classList.add("dark-bg");
    document.querySelectorAll(".l-d").forEach((ele) => {
      ele.classList.remove("light-mode");
      ele.classList.add("dark-mode");
    });
  } else {
    document.body.classList.add("light-bg");
    document.body.classList.remove("dark-bg");
    document.querySelectorAll(".l-d").forEach((ele) => {
      ele.classList.add("light-mode");
      ele.classList.remove("dark-mode");
    });
  }
})();

const change_mode = () => {
  const isLight = document.body.classList.toggle("light-bg");
  document.body.classList.toggle("dark-bg");
  document.querySelectorAll(".l-d").forEach((ele) => {
    ele.classList.toggle("light-mode");
    ele.classList.toggle("dark-mode");
  });
  window.localStorage.setItem("l-d", isLight ? "l" : "d");
};

const light_dark_btn = document.getElementById("light-dark-btn");

light_dark_btn.addEventListener("click", (e) => {
  change_mode();
});

light_dark_btn.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    change_mode();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.shiftKey && e.ctrlKey && e.code === "Backquote") {
    change_mode();
  }
});
