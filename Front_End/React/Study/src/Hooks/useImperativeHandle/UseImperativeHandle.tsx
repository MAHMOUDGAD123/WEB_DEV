import { useState, useRef } from "react";
import Example from "../../Example";
import Title from "../../Title";
import "./useImperativeHandle.css";
import CustomInput, { RefType } from "./CustomInput";
import ActionButtons from "./ActionButtons";

const UseImperativeHandle = () => {
  const [input, setInput] = useState<string>(() => "");
  const customRef = useRef<RefType>(null);

  return (
    <div className="section">
      <Title name="useImperativeHandle() Hook" />

      <div className="wrapper">
        <Example>
          <CustomInput
            onChange={(e) => setInput(e.target.value)}
            placeholder="....."
            ref={customRef}
          />

          <ActionButtons
            focusInput={() => customRef.current.focus()}
            blurInput={() => customRef.current.blur()}
            clearInput={() => customRef.current.clear()}
            selectInput={() => customRef.current.select()}
          />

          <div className="output">{input}</div>
        </Example>
      </div>
    </div>
  );
};

export default UseImperativeHandle;
