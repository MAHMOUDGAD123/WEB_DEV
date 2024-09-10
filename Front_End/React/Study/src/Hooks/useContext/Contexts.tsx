import { createContext } from "react";
import { Theme } from "./types";

const ThemeContext = createContext<Theme | null>({
  bg_col: "#111",
  col: "#fff",
});
const FontSizeContext = createContext<number>(10);

export { ThemeContext, FontSizeContext };
