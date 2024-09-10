import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lazy_Suspense from "./Hooks/lazy_Suspense/Lazy_Suspense";
import UseCallback from "./Hooks/useCallback/UseCallback";
import UseContext from "./Hooks/useContext/UseContext";
import UseEffect from "./Hooks/useEffect/UseEffect";
import UseImperativeHandle from "./Hooks/useImperativeHandle/UseImperativeHandle";
import UseMemo from "./Hooks/useMemo/UseMemo";
import UseRef from "./Hooks/useRef/UseRef";
import UseState from "./Hooks/useState/UseState";
import UseDeferredValue from "./Hooks/useTransition_useDeferredValue/UseDeferredValue";
import UseTransition from "./Hooks/useTransition_useDeferredValue/UseTransition";
import UseReducer from "./Hooks/UseReducer/UseReducer";

const App: () => JSX.Element = () => {
  return (
    <>
      <div className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <Lazy_Suspense />
      <UseCallback />
      <UseContext />
      <UseEffect />
      <UseImperativeHandle />
      <UseMemo />
      <UseRef />
      <UseState />
      <UseDeferredValue />
      <UseTransition />
      <UseReducer />
    </>
  );
};

export default App;
