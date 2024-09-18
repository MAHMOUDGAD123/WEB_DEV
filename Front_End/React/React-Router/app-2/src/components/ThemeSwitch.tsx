import { memo } from "react";
import "./theme-switch.css";

const ThemeSwitch = () => {
  return (
    <div
      id="themeSwitch"
      className="dark"
      onClick={(e) => {
        const isLight = document.documentElement.classList.toggle("light");
        (e.target as HTMLDivElement)!.classList.toggle("dark");
        (document.getElementById("logoImg") as HTMLImageElement)!.src = isLight
          ? "/react-router-d.svg"
          : "/react-router-l.svg";
      }}
    ></div>
  );
};

export default memo(ThemeSwitch);
