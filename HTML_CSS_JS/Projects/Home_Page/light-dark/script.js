const light_dark_btn = document.getElementById("light-dark-btn");
const l_d_elements = document.querySelectorAll(".l-d");

const change_mode = () => {
  document.body.classList.toggle("light-bg");
  document.body.classList.toggle("dark-bg");

  l_d_elements.forEach((ele) => {
    ele.classList.toggle("light-mode");
    ele.classList.toggle("dark-mode");
  });
};

light_dark_btn.addEventListener("click", (e) => {
  change_mode();
  console.log(e.code);
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
