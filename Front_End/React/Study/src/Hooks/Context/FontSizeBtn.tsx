import { memo, useContext } from "react";
import { ThemeContext } from "./Contexts";

interface FontSizeBtnProps {
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  size: number;
  clicked: boolean;
}

const FontSizeBtn = ({ setFontSize, size, clicked }: FontSizeBtnProps) => {
  console.log("FontSizeBtn Rendered");

  const theme = useContext(ThemeContext);

  return (
    <div
      className="font-size-btn"
      style={{
        backgroundColor: clicked ? "orange" : theme.bg_col,
        color: theme.col,
      }}
      onClick={() => setFontSize(size)}
    >
      {size}
    </div>
  );
};

export default memo(FontSizeBtn);
