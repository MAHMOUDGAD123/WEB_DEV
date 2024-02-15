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

/* Password & eye input field Start */

const eye = document.getElementById("eye");
const password = document.getElementById("password");

if (password) {
  password.placeholder = "use (ctrl + alt) to toggle";
  password.type = "password";
}

const toggle_eye = () => {
  eye.classList.toggle("view");

  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

eye?.addEventListener("click", () => {
  toggle_eye();
});

// document.addEventListener("keydown", (e) => {
//   if (e.ctrlKey && e.altKey) {
//     toggle_eye();
//   }
// });

/* Password input field End */
