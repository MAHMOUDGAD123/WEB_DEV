/* Back-To-Top Start */
const btt = document.querySelector(".back-to-top");

const at_top_mode = () => {
  btt.style.display = "none";
};
at_top_mode();

const scroll_mode = () => {
  btt.style.display = "block";
};

window.addEventListener("scroll", () => {
  if (window.scrollY === 0) {
    at_top_mode();
  } else {
    scroll_mode();
  }
});
/* Back-To-Top End */
