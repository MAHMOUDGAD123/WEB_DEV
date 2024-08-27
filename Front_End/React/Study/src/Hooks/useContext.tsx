import React from "react";
import Example from "./Example";
import Title from "./Title";
import "./Styles/useContext.css";

// const themeContext = React.createContext();

const UseContext = () => {
  return (
    <div className="section">
      {/* useContext Hook */}
      <Title name="useContext() Hook" />

      <div className="wrapper">
        <Example>
          <></>
        </Example>
      </div>
    </div>
  );
};

export default UseContext;
