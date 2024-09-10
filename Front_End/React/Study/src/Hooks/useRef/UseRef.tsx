import { useState, useRef, useEffect } from "react";
import Example from "../../Example";
import Title from "../../Title";
import "./useRef.css";
import { generate_random_color } from "../../utils";

const RenderCounter = () => {
  const renderCount = useRef(0);
  const btnEle = useRef(null); // used to store the button dom node
  const previusColor = useRef(""); // used to sote store te previous color

  const [color, setColor] = useState(() => generate_random_color());

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    previusColor.current = color;
    (btnEle.current as HTMLButtonElement).style.backgroundColor = color;
  }, [color]);

  return (
    <div className="render-counter">
      <button
        ref={btnEle}
        onClick={() => {
          setColor(generate_random_color());
        }}
      >
        Click to re-render & change bg-color
      </button>
      <code>Render Count =&gt; {renderCount.current}</code>
      <code>The Current Color IS =&gt; {color}</code>
      <code>The Previous Color Was =&gt; {previusColor.current}</code>
    </div>
  );
};

const Stopwatch = () => {
  const [now, setNow] = useState(0);
  const startTime = useRef(0);
  const intervalRef = useRef(0);
  const diffAtPause = useRef(0);
  const isStarted = useRef(false);
  const isStopped = useRef(false);

  const handleStart = () => {
    if (!isStarted.current) {
      startTime.current = performance.now() - diffAtPause.current;
      setNow(performance.now());
      isStarted.current = true;
      isStopped.current = false;

      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setNow(performance.now());
      }, 50);
    }
  };

  const handleStop = () => {
    diffAtPause.current = 0;
    clearInterval(intervalRef.current);
    isStopped.current = true;
    isStarted.current = false;
  };

  const handlePause = () => {
    if (!isStopped.current) {
      diffAtPause.current = now - startTime.current;
      startTime.current = now;
      clearInterval(intervalRef.current);
      isStarted.current = false;
    }
  };

  const getTimer = () => {
    return ((now - startTime.current) / 1000).toFixed(3);
  };

  return (
    <div className="stop-watch">
      <h1>Time Passed: {getTimer()}</h1>
      <div className="controls">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </div>
  );
};

const UseRef = () => {
  return (
    <div className="section">
      {/* useRef Hook */}
      <Title name="useRef() Hook" />

      <div className="wrapper">
        <Example>
          <RenderCounter />
        </Example>
        <Example>
          <Stopwatch />
        </Example>
      </div>
    </div>
  );
};

export default UseRef;
