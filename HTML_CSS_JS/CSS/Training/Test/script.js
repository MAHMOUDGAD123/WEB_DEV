document.getElementById("themeSwitch").addEventListener("click", (e) => {
  const isDark = e.target.classList.toggle("dark");
  e.target.parentElement.style.setProperty(
    "--bg-col",
    isDark ? "#333" : "#eee"
  );
});
