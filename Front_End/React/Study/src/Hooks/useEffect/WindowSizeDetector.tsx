import { useEffect, useState } from "react";

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

export default WindowSizeDetector;
