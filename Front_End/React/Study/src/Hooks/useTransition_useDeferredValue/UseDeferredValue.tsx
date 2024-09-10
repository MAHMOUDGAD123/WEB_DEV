import { useState, useDeferredValue, useEffect, useMemo } from "react";
import Title from "../../Title";
import Example from "../../Example";
import { fetchBookApi } from "./utils";
import Item from "./Item";
import "./style.css";

type ListProps = {
  input: string;
};

const List = ({ input }: ListProps) => {
  return useMemo(
    () => (
      <div className="list">
        {(() => {
          const list = fetchBookApi(input)?.map(({ name, year }, i) => (
            <Item name={name} year={year} key={i} />
          ));
          return list ? (
            list.length ? (
              list
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
    ),
    [input]
  );
};

const UseDeferredValue = () => {
  const [input, setInput] = useState("");
  const deferredInput = useDeferredValue(input);
  const isStale = input !== deferredInput;

  useEffect(() => {
    console.log(`- input: ${input}`);
    console.log(`- deferredInput: ${deferredInput}`);
    console.log(`----------------------------`);
  }, [input, deferredInput]);

  return (
    <div className="section">
      {/* UseDeferredValue Hook */}

      <div className="wrapper">
        <Title name="useDeferredValue() Hook" />
        <Example>
          <div className="item-list">
            <input
              type="text"
              placeholder="Search..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <div
              style={{
                opacity: isStale ? 0.5 : 1,
                transition: "opacity 500ms",
              }}
            >
              {<List input={deferredInput} />}
            </div>
          </div>
        </Example>
      </div>
    </div>
  );
};

export default UseDeferredValue;
