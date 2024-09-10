import { lazy, Suspense, useRef, useState } from "react";
import CustomInput from "./CustomInput";
import Loading from "./Loading";
import { wait_for } from "./utils";
import { TodosProps } from "./List";
import Example from "../../Example";
import Title from "../../Title";
import "./style.css";

let todosCount: number = 0;

const initialTodos: TodosProps[] = [
  { id: ++todosCount, title: "Study React 💻" },
  { id: ++todosCount, title: "Watch Some Youtube Videos ▶" },
  { id: ++todosCount, title: "Play PUBG Mobile 🔫" },
  { id: ++todosCount, title: "Go Get The Bread 🥖" },
  { id: ++todosCount, title: "Go To Bed 💤" },
];

const DelayedList = lazy(() => wait_for(import("./List"), 3000));

const Lazy_Suspense = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<TodosProps[]>(initialTodos);

  return (
    <div className="section">
      <Title name="Lazy_Suspense" />

      <div className="wrapper">
        <Example>
          <div className="lazy-todo">
            <div className="add-todo">
              <CustomInput placeholder="Add Todo..." ref={inputRef} />
              <button
                className="add-btn"
                onClick={() => {
                  const newtitle = inputRef.current.value;

                  if (!newtitle.length) return;

                  const newTodo = {
                    title: newtitle,
                    id: ++todosCount,
                  };

                  setTodos([...todos, newTodo]);
                }}
              >
                Add
              </button>
            </div>
            <Suspense fallback={<Loading />}>
              <DelayedList todos={todos} />
            </Suspense>
          </div>
        </Example>
      </div>
    </div>
  );
};

export default Lazy_Suspense;
