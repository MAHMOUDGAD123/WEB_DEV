import { useMemo } from "react";
import "./style.css";
import Section from "./Section";
import { Theme } from "./types";
import ThemeSwitch from "./ThemeSwitch";
import FontSizeBtn from "./FontSizeBtn";
import { ThemeContext, FontSizeContext } from "./Contexts";
import { useState_LS } from "../CustomHooks";

const Page = () => {
  const [isDark, setIsDark] = useState_LS("_theme_", true);
  const [fontSize, setFontSize] = useState_LS("_font_size_", 10);

  const theme: Theme = useMemo(
    () => ({
      bg_col: isDark ? "#111" : "#ccc",
      col: isDark ? "#fff" : "#000",
    }),
    [isDark]
  );

  return (
    <ThemeContext.Provider value={theme}>
      <FontSizeContext.Provider value={fontSize}>
        <div className="page">
          <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
          <div className="fontsize-btns">
            {(() => {
              const btns = [];
              for (let i = 10; i <= 50; i += 10) {
                btns.push(
                  <FontSizeBtn
                    key={i}
                    setFontSize={setFontSize}
                    size={i}
                    clicked={i === fontSize}
                  />
                );
              }
              return btns;
            })()}
          </div>
          <Section />
          <Section />
        </div>
      </FontSizeContext.Provider>
    </ThemeContext.Provider>
  );
};

export default Page;
