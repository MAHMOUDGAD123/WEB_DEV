import { KeyboardEvent, useState } from "react";

// types
type Info = {
  id: number;
  title: string;
};

// globals
let idCounter: number = 0;
let itemNewTitle: string = "";
let editItemId: number = 0;

function Element(props: {
  id: number;
  title: string;
  setItemsState: [Info[], React.Dispatch<React.SetStateAction<Info[]>>];
  setEditModeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}) {
  const removeHandler = () => {
    const [items, setItems] = props.setItemsState;
    const thisId = props.id;
    setItems(items.filter(({ id }) => id !== thisId));
  };

  const editHandler = () => {
    const [, setEditMode] = props.setEditModeState;
    setEditMode(true);
    editItemId = props.id;
    document.getElementById("editin")!.focus();
  };

  return (
    <div className="element">
      <span className="remove" title="remove" onClick={removeHandler}></span>
      <span className="edit" title="edit" onClick={editHandler}></span>
      <span className="title">{props.title}</span>
    </div>
  );
}

export default function Content() {
  const init: Info[] = [];

  const [items, setItems] = useState(init);
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);

  const addOnClickHandler = () => {
    if (input.length) {
      setItems([...items, { id: ++idCounter, title: input }]);
      setInput("");
    }
  };

  const addOnEnterClick = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      addOnClickHandler();
    }
  };

  const itemList = (): JSX.Element[] => {
    // reset the counter only if the items is empty
    if (!items.length) idCounter = 0;

    return items.map((item) => {
      return (
        <Element
          key={item.id}
          id={item.id}
          title={item.title}
          setItemsState={[items, setItems]}
          setEditModeState={[editMode, setEditMode]}
        />
      );
    });
  };

  const editTitlehandler = (e) => {
    const newItems = items.map(({ id, title }) => ({
      id,
      title:
        id === editItemId
          ? itemNewTitle.length
            ? itemNewTitle
            : title
          : title,
    }));
    setItems(newItems);
    setEditMode(false);
    e.target.value = "";
    itemNewTitle = "";
  };

  const editOnEnterClick = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      editTitlehandler(e);
    }
  };

  return (
    <div id="content">
      <div id="controls">
        <input
          value={input}
          type="text"
          name="in"
          id="in"
          placeholder="Enter A New Item"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={addOnEnterClick}
        />
        <button onClick={addOnClickHandler}>+</button>
      </div>

      <div id="elements">{itemList()}</div>

      <div
        id="editInput"
        style={{
          transform: `rotateX(${editMode ? 0 : 90}deg)`,
        }}
        onKeyDown={editOnEnterClick}
      >
        <div className="wrapper">
          <input
            type="text"
            name="editin"
            id="editin"
            placeholder="Enter The New Title"
            onChange={(e) => {
              itemNewTitle = e.target.value;
            }}
          />
          <button onClick={editTitlehandler}>✓</button>
        </div>
        <code
          onClick={(e) => {
            e.stopPropagation();
            setEditMode(false);
          }}
        >
          Cancel
        </code>
      </div>
    </div>
  );
}
