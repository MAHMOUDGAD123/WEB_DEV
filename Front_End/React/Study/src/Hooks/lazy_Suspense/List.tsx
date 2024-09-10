import { random_emoji } from "../../utils";

type TodoProps = {
  title: string;
};

const Todo = ({ title }: TodoProps) => {
  return (
    <div className="todo" data-prefix={random_emoji()}>
      <div>{title}</div>
    </div>
  );
};

export type TodosProps = TodoProps & {
  id: number;
};

const List = ({ todos }: { todos: TodosProps[] }) => {
  return (
    <div className="todo-list">
      {(() => todos.map(({ id, title }) => <Todo key={id} title={title} />))()}
    </div>
  );
};

export default List;
