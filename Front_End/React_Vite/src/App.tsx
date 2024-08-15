import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ThemeSwitch from "./theme";

export default function App() {
  const [count, setCount] = useState(0);
  const update = () => setCount((Math.random() * 101) >>> 0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={update}>Random Number Between 1 - 100</button>
        <h3>{count}</h3>
      </div>
      <ThemeSwitch />
    </>
  );
}
