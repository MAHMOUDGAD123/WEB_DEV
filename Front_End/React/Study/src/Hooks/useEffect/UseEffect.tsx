import Title from "../../Title";
import Example from "../../Example";
import WindowSizeDetector from "./WindowSizeDetector";
import Clock from "./Clock";
import Timer from "./Timer";
import "./usetEffect.css";

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
