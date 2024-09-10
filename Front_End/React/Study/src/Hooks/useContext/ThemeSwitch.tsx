import { memo } from "react";

type ThemeState = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeSwitch = ({ isDark, setIsDark }: ThemeState) => {
  console.log("ThemeSwitch Rendered");
  return (
    <div
      id="themeSwitch"
      className={isDark ? "dark" : ""}
      onClick={() => setIsDark(!isDark)}
    ></div>
  );
};

export default memo(ThemeSwitch);
