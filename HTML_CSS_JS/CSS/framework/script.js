/* Back-To-Top & Progress Start */

const btt = document.querySelector(".back-to-top");
const progress = document.getElementById("progress");

const at_top_mode = () => {
  btt.style.display = "none";
};
const scroll_mode = () => {
  btt.style.display = "block";
};

window.addEventListener(
  "load",
  () => {
    at_top_mode();

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

/* Back-To-Top & Progress End */
