import { useState } from "react";

export default function ThemeSwitch() {
  const [darkTheme, changeTheme] = useState(true);
  const toggleTheme = () => {
    if (darkTheme) {
      document.body.classList.add("light");
      document.querySelectorAll("button").forEach((btn) => {
        btn.classList.add("light");
      });
      document.getElementById("themeBtn")!.textContent = "Light";
      return changeTheme(false);
    } else {
      document.body.classList.remove("light");
      document.querySelectorAll("button").forEach((btn) => {
        btn.classList.remove("light");
      });
      document.getElementById("themeBtn")!.textContent = "Dark";
      return changeTheme(true);
    }
  };

  return (
    <button id={"themeBtn"} onClick={toggleTheme}>
      Dark
    </button>
  );
}
