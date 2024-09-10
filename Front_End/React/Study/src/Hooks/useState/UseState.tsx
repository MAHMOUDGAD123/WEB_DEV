import { useState } from "react";
import Title from "../../Title";
import Example from "../../Example";
import { random_in_range, random_emoji } from "../../utils";
import "./useState.css";

const UseState = () => {
  // ex-1 hooks
  const [rand, setRand] = useState(() => 11);
  const [emoji, setEmoji] = useState(() => random_emoji());

  // ex-2 hooks
  const [volumeState, setVolumeState] = useState({
    x_scale: 40,
    bg_color: "orange",
  });

  const setColor = (x_scale: number) => {
    return x_scale <= 20
      ? "red"
      : x_scale <= 40
      ? "orange"
      : x_scale <= 60
      ? "yellow"
      : x_scale <= 80
      ? "royalblue"
      : "green";
  };
  const volumeUp = () => {
    const oldLevel = volumeState.x_scale;
    if (oldLevel < 100) {
      const newLevel = oldLevel + 20;
      setVolumeState({ x_scale: newLevel, bg_color: setColor(newLevel) });
    }
  };
  const volumeDown = () => {
    const oldLevel = volumeState.x_scale;
    if (volumeState.x_scale !== 0) {
      const newLevel = oldLevel - 20;
      setVolumeState({ x_scale: newLevel, bg_color: setColor(newLevel) });
    }
  };

  return (
    <div className="section">
      {/* useState Hook */}
      <Title name="useState() Hook" />

      <div className="wrapper">
        {/* ex-1 */}
        <Example>
          <button onClick={() => setRand(random_in_range(10, 99))}>
            Click To Generate A Random Number [{" "}
            <code style={{ color: "tomato", fontSize: "1.5rem" }}>{rand}</code>{" "}
            ]
          </button>
          <button onClick={() => setEmoji(random_emoji())}>
            Click To Generate A Random Emoji [{" "}
            <code style={{ color: "tomato", fontSize: "1.5rem" }}>{emoji}</code>{" "}
            ]
          </button>
        </Example>
        <Example>
          <div className="volume-control">
            <div className="btn down" onClick={volumeDown}>
              -
            </div>
            <div className="level">
              <div
                style={{
                  scale: `${volumeState.x_scale / 100} 1`,
                  backgroundColor: volumeState.bg_color,
                }}
              ></div>
            </div>
            <div className="btn up" onClick={volumeUp}>
              +
            </div>
          </div>
        </Example>
      </div>
    </div>
  );
};

export default UseState;
