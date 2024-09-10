import { useContext } from "react";
import { ThemeContext, FontSizeContext } from "./Contexts";

const Article = () => {
  // console.log("Article Rednered");
  const fontSize = useContext(FontSizeContext);
  const theme = useContext(ThemeContext);

  return (
    <div
      className="article"
      style={{
        backgroundColor: theme.bg_col,
        color: theme.col,
      }}
    >
      <h2 className="heading"></h2>
      <p
        style={{
          fontSize: fontSize,
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta tempora
        ipsam sequi in odio aperiam commodi rerum est iste, delectus sint?
        Consequuntur pariatur assumenda vitae impedit tenetur animi, culpa unde
        eaque sequi error omnis doloremque dignissimos explicabo cum id ducimus?
        Id excepturi fugit quidem et nihil rem dolor itaque veritatis.
      </p>
    </div>
  );
};

export default Article;
