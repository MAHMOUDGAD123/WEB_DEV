import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import UseState from "./Hooks/UseState";
// import UseEffect from "./Hooks/UseEffect";
// import UseRef from "./Hooks/UseRef";
// import UseMemo from "./Hooks/UseMemo";
// import UseCallback from "./Hooks/useCallback";
// import UseContext from "./Hooks/useContext";
import Page from "./Hooks/Context/Page";

const App: () => JSX.Element = () => {
  return (
    <>
      <div className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <UseCallback /> */}
      {/* <UseContext /> */}
      <Page />
    </>
  );
};

export default App;
