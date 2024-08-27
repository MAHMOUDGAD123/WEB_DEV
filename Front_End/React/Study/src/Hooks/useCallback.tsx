import { memo as reactMemo, useState, useCallback } from "react";
import Example from "./Example";
import Title from "./Title";
import "./Styles/useCallback.css";

type ButtonProps = {
  incrementFn: (n: number) => void;
  n: number;
};

const Button = reactMemo(({ incrementFn, n }: ButtonProps) => {
  console.log("Button rendered");
  return <button onClick={() => incrementFn(n)}>+{n}</button>;
});

const UseCallback = () => {
  const [value, setValue] = useState(() => 0);

  // use useCallback to stop the memorized buttons from re-render at every incement
  const increment = useCallback((n: number) => {
    setValue((v) => v + n);
  }, []);

  return (
    <div className="section">
      {/* useCallback Hook */}
      <Title name="useCallback() Hook" />

      <div className="wrapper">
        <Example>
          <div className="incrementer">
            <div className="btns">
              {(() =>
                [10, 20, 30, 40, 50].map((n) => (
                  <Button key={n} incrementFn={increment} n={n} />
                )))()}
            </div>
            <div className="value">{value}</div>
          </div>
        </Example>
      </div>
    </div>
  );
};

export default UseCallback;
