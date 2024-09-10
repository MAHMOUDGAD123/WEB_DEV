import { memo, useState, useTransition } from "react";
import Title from "../../Title";
import Example from "../../Example";
import { ItemList } from "./utils";
import { fetchBookApi } from "./utils";
import Item from "./Item";
import "./style.css";

const List = memo(({ list, input }: { list: ItemList; input: string }) => {
  return (
    <div className="list">
      {(() => {
        const JSXList = list?.map(({ name, year }, i) => (
          <Item name={name} year={year} key={i} />
        ));
        return JSXList ? (
          JSXList.length ? (
            JSXList
          ) : (
            <div>
              No matches for <span className="no-result">{input}</span>
            </div>
          )
        ) : (
          <div className="msg">Search for a book</div>
        );
      })()}
    </div>
  );
});

const Loading = () => {
  return <div>🌀 Loading...</div>;
};

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState(null);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="section">
      {/* useTransition Hook */}

      <div className="wrapper">
        <Title name="useTransition() Hook" />
        <Example>
          <div className="item-list">
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);

                startTransition(() => {
                  setList(fetchBookApi(e.target.value));
                });
              }}
            />
            {isPending ? <Loading /> : <List list={list} input={input} />}
          </div>
        </Example>
      </div>
    </div>
  );
};

export default UseTransition;
