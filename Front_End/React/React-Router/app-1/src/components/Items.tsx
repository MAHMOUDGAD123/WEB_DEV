import { useSearchParams } from "react-router-dom";

const items = [
  "blue",
  "red",
  "green",
  "red",
  "blue",
  "red",
  "green",
  "blue",
  "red",
  "red",
  "green",
  "blue",
];

const Items = () => {
  const [searchParams, setSearchParams] = useSearchParams({ filter: "all" });

  const filterHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const btn = e.target as HTMLButtonElement;
    setSearchParams({ filter: btn.dataset.type });
  };

  return (
    <>
      <h1>Items Page</h1>
      <div className="filter">
        <button onClick={filterHandler} data-type="all">
          all
        </button>
        <button onClick={filterHandler} data-type="red">
          red
        </button>
        <button onClick={filterHandler} data-type="green">
          green
        </button>
        <button onClick={filterHandler} data-type="blue">
          blue
        </button>
      </div>
      <div className="items">
        {(() => {
          if (searchParams.get("filter") === "all")
            return items.map((col, i) => {
              return (
                <div
                  key={i}
                  className="item"
                  style={{ backgroundColor: col }}
                ></div>
              );
            });

          return items
            .filter((col) => {
              return col === searchParams.get("filter");
            })
            .map((col, i) => {
              return (
                <div
                  key={i}
                  className="item"
                  style={{ backgroundColor: col }}
                ></div>
              );
            });
        })()}
      </div>
    </>
  );
};

export default Items;
