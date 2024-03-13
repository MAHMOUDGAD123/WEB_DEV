/* Back-To-Top & Progress Start */

const btt = document.querySelector(".back-to-top");
const progress = document.getElementById("progress");

const at_top_mode = () => {
  btt.style.display = "none";
};
at_top_mode();

const scroll_mode = () => {
  btt.style.display = "block";
};

const scroll_progress = () => {
  if (progress) {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progress.style.width = scrolled + "%";
  }
};

window.addEventListener("load", scroll_progress, true);

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY === 0) {
      at_top_mode();
    } else {
      scroll_mode();
    }
    scroll_progress();
  },
  true
);

/* Back-To-Top & Progress End */

/* Password & eye input field Start */

const eye = document.getElementById("eye");
const password = document.getElementById("password");

const toggle_eye = () => {
  eye.classList.toggle("view");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

if (password && eye) {
  password.type = "password";

  eye.addEventListener("click", toggle_eye);
}

/* Password input field End */
