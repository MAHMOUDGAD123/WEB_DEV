document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const isHidden = btn.parentElement
      .querySelector(".box")
      .classList.toggle("hidden");

    if (isHidden) {
      e.target.textContent = "Show";
    } else {
      e.target.textContent = "Hide";
    }
  });
});
