import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const get_random_num = () => (Math.random() * 90 + 10) >>> 0;

const App = () => {
  const [random, setRandom] = useState(10);

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
      <code>click to generate a random number</code>
      <div className="card">
        <button onClick={() => setRandom(get_random_num())}>
          random number is =&gt; [{" "}
          <span
            style={{
              color: "tomato",
            }}
          >
            {random}
          </span>{" "}
          ]
        </button>
      </div>
    </>
  );
};

export default App;
