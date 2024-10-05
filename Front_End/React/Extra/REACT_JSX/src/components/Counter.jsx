import { useState } from "react";
import "../styles/counter.css";

export default function Counter() {
  const [count, setCount] = useState(() => 0);

  return (
    <div className="wrapper counter">
      <div className="value">{count}</div>
      <div className="btns">
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <button onClick={() => setCount((c) => c - 1)}>-</button>
      </div>
    </div>
  );
}
