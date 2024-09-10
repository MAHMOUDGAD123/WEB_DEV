import { useState, useRef, useMemo } from "react";
import Example from "../../Example";
import Title from "../../Title";
import "./useMemo.css";
import { wait_for } from "../../utils";

type Item = {
  id: number;
  col: string;
  index: number;
};

const itemsList: Item[] = (() => {
  const list = [];
  for (let i = 0; i < 50; ++i) {
    list.push({
      id: i,
      col: ["red", "green", "blue"][(Math.random() * 3) >>> 0],
      index: i + 1,
    });
  }
  return list;
})();

const filterItems = (filter: string, filterCount: number) => {
  console.log(`[${filterCount}] Filtering The Items...`);
  wait_for(0.3); // delay
  return filter === "all"
    ? itemsList
    : itemsList.filter((item) => filter === item.col);
};

const List = ({ visibleItems }: { visibleItems: Item[] }) => {
  console.log("List Render");
  return (
    <div className="items-list">
      {visibleItems.map(({ id, col, index }) => {
        return (
          <div key={id} className="item" style={{ backgroundColor: col }}>
            {index}
          </div>
        );
      })}
    </div>
  );
};

type ThemeState = {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeSwitch = ({ isDark, setIsDark }: ThemeState) => {
  console.log("ThemeSwitch Render");
  return (
    <div
      id="themeSwitch"
      className={isDark ? "dark" : ""}
      onClick={() => setIsDark(!isDark)}
    ></div>
  );
};

const Page = () => {
  const [filter, setFilter] = useState(() => "all");
  const [isDark, setIsDark] = useState(() => true);
  const filterCount = useRef(0);

  // const visibleItems = filterItems(filter); // ❌

  const visibleItems = useMemo(
    () => filterItems(filter, ++filterCount.current),
    [filter]
  ); // should use useMemo() ✅

  const filterBtnClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    filter: string
  ) => {
    setFilter(filter);
    // set the clicked btn
    const clickedBtn = e.target as HTMLDivElement;
    clickedBtn.parentElement
      .querySelector(".clicked")
      .classList.remove("clicked");
    clickedBtn.classList.add("clicked");
  };

  const MemorizedList = useMemo(
    () => <List visibleItems={visibleItems} />,
    [visibleItems]
  );

  const memorizedThemeSwitch = useMemo(
    () => <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />,
    [isDark]
  );

  return (
    <div id="page" className={isDark ? "dark" : ""}>
      {memorizedThemeSwitch}
      <div className="filter">
        <div
          className="btn clicked"
          onClick={(e) => filterBtnClickHandler(e, "all")}
        >
          All
        </div>
        <div className="btn" onClick={(e) => filterBtnClickHandler(e, "red")}>
          Red
        </div>
        <div className="btn" onClick={(e) => filterBtnClickHandler(e, "green")}>
          Green
        </div>
        <div className="btn" onClick={(e) => filterBtnClickHandler(e, "blue")}>
          Blue
        </div>
      </div>
      {MemorizedList}
    </div>
  );
};

const UseMemo = () => {
  return (
    <div className="section">
      {/* useMomo Hook */}
      <Title name="useMemo() Hook" />

      <div className="wrapper">
        <Example>
          <Page />
        </Example>
      </div>
    </div>
  );
};

export default UseMemo;
