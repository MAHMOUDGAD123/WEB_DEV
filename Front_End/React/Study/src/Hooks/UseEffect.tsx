import { useState, useEffect } from "react";
import Title from "./Title";
import Example from "./Example";
import "./Styles/usetEffect.css";

const WindowSizeDetector = () => {
  const [windowSize, setWindowSize] = useState(() => ({
    inWidth: window.innerWidth,
    inHeight: window.innerHeight,
  }));

  const updateWindowSize = () => {
    setWindowSize({
      inWidth: window.innerWidth,
      inHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    console.log("Add 'resize' eventListener");
    window.addEventListener("resize", updateWindowSize);

    return () => {
      console.log("Remove 'resize' eventListener");
      window.removeEventListener("resize", updateWindowSize);
    };
  }, []);

  return (
    <>
      <code>Resize The Window To update the values</code>
      <div className="window-info">
        <div className="slot">
          <span>InnerWidth:</span>
          <span>{windowSize.inWidth}</span>
        </div>
        <div className="slot">
          <span>InnerHeight:</span>
          <span>{windowSize.inHeight}</span>
        </div>
      </div>
    </>
  );
};

const Clock = () => {
  const [time, setTime] = useState(() => "00 : 00 : 00");

  const frmt = (n: number) => {
    if (!n) return "00";
    return Math.floor(Math.log10(n)) ? n : "0" + n;
  };

  useEffect(() => {
    console.log("Set The Clock");
    const intervId = window.setInterval(() => {
      // clock
      const D = new Date();
      const hr = frmt(D.getHours());
      const min = frmt(D.getMinutes());
      const sec = frmt(D.getSeconds());
      setTime(`${hr} : ${min} : ${sec}`);

      return () => {
        console.log("Remove The Clock");
        clearInterval(intervId);
      };
    }, 1000);
  }, []);

  return <div className="clock">{time}</div>;
};

const Timer = ({ sec }: { sec: number }) => {
  const [timer, setTimer] = useState(() => ({
    color: "orange",
    sec: 0,
  }));
  const count = sec;
  const clearTiemrInterval = (id: number) => {
    console.log(`Clear The ${count} Sec Timer Interval`);
    clearInterval(id);
  };

  useEffect(() => {
    console.log("Set Timer Interval");
    const intervId = setInterval(() => {
      setTimer((timer) => ({ ...timer, sec: timer.sec + 1 }));
      if (!--sec) {
        setTimer((timer) => ({ ...timer, color: "black" }));
        clearTiemrInterval(intervId);
      }
    }, 1000);

    return () => clearTiemrInterval(intervId);
  }, [sec]);

  return (
    <div className="timer" style={{ color: timer.color }}>
      {timer.sec}
    </div>
  );
};

const UseEffect = () => {
  return (
    <div className="section">
      {/* userEffect Hook */}
      <Title name="useEffect() Hook" />

      <div className="wrapper">
        <Example>
          <WindowSizeDetector />
        </Example>

        <Example>
          <Clock />
        </Example>

        <Example>
          <div className="timers-grid">
            {(() => {
              const timers: JSX.Element[] = [];
              for (let i = 10; i < 100; i += 10) {
                timers.push(<Timer key={i} sec={i} />);
              }
              return timers;
            })()}
          </div>
        </Example>
      </div>
    </div>
  );
};

export default UseEffect;
