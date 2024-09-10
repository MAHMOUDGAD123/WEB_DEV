import { useEffect, useState } from "react";

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

export default Clock;
