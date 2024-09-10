import { useEffect, useState } from "react";

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

export default Timer;
