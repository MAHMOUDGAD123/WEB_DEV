import { useMemo, useReducer } from "react";
import Example from "../../Example";
import Title from "../../Title";
import "./useReducer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faIcons from "@fortawesome/free-solid-svg-icons";

enum ACTION {
  BS,
  POW,
  MOD,
  MUL,
  DIV,
  SUB,
  ADD,
  CLR,
  CALC,
  IN_,
  IN0,
  IN1,
  IN2,
  IN3,
  IN4,
  IN5,
  IN6,
  IN7,
  IN8,
  IN9,
}

type OpSymbol = "*" | "/" | "-" | "+" | "^" | "%" | "";

interface StateType {
  operand1: string;
  operand2: string;
  operation: OpSymbol;
  result: string;
  mode: Mode;
}

interface KeyProps {
  // children: JSX.Element;
  action: ACTION;
  cls: string;
  icon: string;
  id: string;
  dispatchFn: React.Dispatch<ACTION>;
}

/**
 * @info (INPUT_MODE) -> you are giving a number
 * @info (OP_MODE) -> you are giving an operation
 * @info (CALC_MODE) -> you are calculating by clicking =
 * @info (EMPTY_MODE) -> when there's no a given operation
 */
enum Mode {
  INPUT_MODE,
  OP_MODE,
  CALC_MODE,
  EMPTY_MODE,
}

const defaultSate: StateType = {
  operand1: "",
  operand2: "",
  operation: "",
  result: "0",
  mode: Mode.EMPTY_MODE,
};

const keyEventMap = new Map([
  ["Backspace", "bs"],
  ["KeyC", "clr"],
  ["Digit6", "pow"],
  ["Digit5", "mod"],
  ["NumpadMultiply", "mul"],
  ["NumpadDivide", "div"],
  ["NumpadSubtract", "sub"],
  ["NumpadAdd", "add"],
  ["Numpad0", "_0"],
  ["Numpad1", "_1"],
  ["Numpad2", "_2"],
  ["Numpad3", "_3"],
  ["Numpad4", "_4"],
  ["Numpad5", "_5"],
  ["Numpad6", "_6"],
  ["Numpad7", "_7"],
  ["Numpad8", "_8"],
  ["Numpad9", "_9"],
  ["NumpadDecimal", "dot"],
  ["NumpadEnter", "calc"],
]);

const keys = [
  {
    icon: "faDeleteLeft",
    action: ACTION.BS,
    cls: "op",
    id: "bs",
  },
  {
    icon: "faAngleUp",
    action: ACTION.POW,
    cls: "op",
    id: "pow",
  },
  {
    icon: "faPercent",
    action: ACTION.MOD,
    cls: "op",
    id: "mod",
  },
  {
    icon: "faXmark",
    action: ACTION.MUL,
    cls: "op",
    id: "mul",
  },
  { icon: "fa7", action: ACTION.IN7, cls: "in", id: "_7" },
  { icon: "fa8", action: ACTION.IN8, cls: "in", id: "_8" },
  { icon: "fa9", action: ACTION.IN9, cls: "in", id: "_9" },
  {
    icon: "faDivide",
    action: ACTION.DIV,
    cls: "op",
    id: "div",
  },
  { icon: "fa4", action: ACTION.IN4, cls: "in", id: "_4" },
  { icon: "fa5", action: ACTION.IN5, cls: "in", id: "_5" },
  { icon: "fa6", action: ACTION.IN6, cls: "in", id: "_6" },
  {
    icon: "faMinus",
    action: ACTION.SUB,
    cls: "op",
    id: "sub",
  },
  { icon: "fa1", action: ACTION.IN1, cls: "in", id: "_1" },
  { icon: "fa2", action: ACTION.IN2, cls: "in", id: "_2" },
  { icon: "fa3", action: ACTION.IN3, cls: "in", id: "_3" },
  {
    icon: "faPlus",
    action: ACTION.ADD,
    cls: "op",
    id: "add",
  },
  {
    icon: "faC",
    action: ACTION.CLR,
    cls: "clear",
    id: "clr",
  },
  { icon: "fa0", action: ACTION.IN0, cls: "in", id: "_0" },
  {
    icon: "faCircle",
    action: ACTION.IN_,
    cls: "in dot",
    id: "dot",
  },
  {
    icon: "faEquals",
    action: ACTION.CALC,
    cls: "calc",
    id: "calc",
  },
];

/* Components Start */

// memoized key component
const Key = ({ icon, action, cls, id, dispatchFn }: KeyProps) => {
  console.log("Key Rendered");

  return (
    <div
      id={id}
      className={`key ${cls}`}
      onClick={(e) => {
        const btn = e.target as HTMLDivElement;
        btn.classList.add("clicked");
        setTimeout(() => {
          btn.classList.remove("clicked");
        }, 200);
        dispatchFn(action);
      }}
    >
      <FontAwesomeIcon icon={faIcons[icon]} />
    </div>
  );
};

const inputHandler = (state: StateType, value: string) => {
  const previusResult = state.result;
  const mode = state.mode;

  switch (mode) {
    case Mode.EMPTY_MODE:
    case Mode.INPUT_MODE: {
      if (value === ".") {
        return previusResult.includes(".")
          ? state
          : { ...state, result: previusResult + value };
      }
      return {
        ...state,
        result: previusResult !== "0" ? previusResult + value : value,
      };
    }

    case Mode.OP_MODE: {
      if (value === ".") {
        return { ...state, result: "0" + value, mode: Mode.INPUT_MODE };
      }
      return {
        ...state,
        result: value,
        mode: Mode.INPUT_MODE,
      };
    }

    case Mode.CALC_MODE: {
      return { ...defaultSate, result: value };
    }
  }
};

const BackSpaceHandler = (state: StateType) => {
  const previusResult = state.result;
  return previusResult === "Infinity"
    ? defaultSate
    : previusResult.length > 1
    ? { ...state, result: previusResult.slice(0, -1) }
    : previusResult !== "0"
    ? { ...state, result: "0" }
    : state;
};

const clearHandler = () => {
  return defaultSate;
};

const calculate = (x: number, y: number, op: string) => {
  return String(eval(`${x} ${op} ${y}`));
};

const operationsHandler = (state: StateType, op: OpSymbol) => {
  switch (state.mode) {
    case Mode.OP_MODE:
      return { ...state, operation: op };

    case Mode.CALC_MODE: {
      const { result } = state;

      return {
        ...state,
        result: result,
        operand1: result,
        operand2: "",
        operation: op,
        mode: Mode.OP_MODE,
      };
    }

    case Mode.EMPTY_MODE:
    case Mode.INPUT_MODE: {
      const { operand1, result } = state;
      // use addition if there's no operation before
      const oldOp = state.operation === "" ? "+" : state.operation;

      const calcResult = calculate(
        operand1 === "" ? 0 : +operand1,
        +result,
        oldOp === "^" ? "**" : oldOp
      );

      return {
        ...state,
        result: calcResult,
        operand1: calcResult,
        operation: op,
        mode: Mode.OP_MODE,
      };
    }
  }
};

const calculateHandler = (state: StateType) => {
  const { result, operation, mode } = state;

  if (mode === Mode.EMPTY_MODE)
    return { ...state, operand1: result, mode: Mode.CALC_MODE };

  // use addition if there's no operation before
  const op = operation === "" ? "+" : operation;
  const operand1 = mode === Mode.INPUT_MODE ? state.operand1 : result;
  const operand2 = mode === Mode.CALC_MODE ? state.operand2 : result;

  const calcResult = calculate(
    operand1 === "" ? 0 : +operand1,
    operand2 === "" ? 0 : +operand2,
    op === "^" ? "**" : op
  );

  return {
    ...state,
    result: calcResult,
    operand1: operand1,
    operand2: operand2,
    mode: Mode.CALC_MODE,
  };
};

const reducer = (state: StateType, action: ACTION) => {
  switch (action) {
    case ACTION.BS:
      return BackSpaceHandler(state);
    case ACTION.POW:
      return operationsHandler(state, "^");
    case ACTION.MOD:
      return operationsHandler(state, "%");
    case ACTION.MUL:
      return operationsHandler(state, "*");
    case ACTION.DIV:
      return operationsHandler(state, "/");
    case ACTION.SUB:
      return operationsHandler(state, "-");
    case ACTION.ADD:
      return operationsHandler(state, "+");
    case ACTION.CALC:
      return calculateHandler(state);
    case ACTION.CLR:
      return clearHandler();
    case ACTION.IN_:
      return inputHandler(state, ".");
    case ACTION.IN0:
      return inputHandler(state, "0");
    case ACTION.IN1:
      return inputHandler(state, "1");
    case ACTION.IN2:
      return inputHandler(state, "2");
    case ACTION.IN3:
      return inputHandler(state, "3");
    case ACTION.IN4:
      return inputHandler(state, "4");
    case ACTION.IN5:
      return inputHandler(state, "5");
    case ACTION.IN6:
      return inputHandler(state, "6");
    case ACTION.IN7:
      return inputHandler(state, "7");
    case ACTION.IN8:
      return inputHandler(state, "8");
    case ACTION.IN9:
      return inputHandler(state, "9");
    default:
      throw new Error("UNKNOWN ACTION -> " + action);
  }
};

// add keyboard eventListener to the document to be able to input from keyboard
// --------------------------------------------------
setTimeout(() => {
  document.addEventListener("keydown", (e) => {
    const elementId = keyEventMap.get(e.code);
    if (elementId) document.getElementById(elementId).click();
  });
}, 0);
// --------------------------------------------------

// calculator component
const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, defaultSate);

  const Keys = useMemo(() => {
    return (
      <div className="keys">
        {keys.map(({ icon, action, cls, id }, i) => (
          <Key
            key={i}
            action={action}
            cls={cls}
            dispatchFn={dispatch}
            icon={icon}
            id={id}
          />
        ))}
      </div>
    );
  }, []);

  return (
    <div className="calculator">
      <div className="screen">
        <div className="inputs">
          <div>{state.operand1}</div>
          <div>{state.operation}</div>
          {state.mode === Mode.CALC_MODE && (
            <>
              <div>{state.operand2}</div>
              <div>=</div>
            </>
          )}
        </div>
        <div className="result">{state.result}</div>
      </div>
      {Keys}
    </div>
  );
};

/* Components End */

// Parent
const UseReducer = () => {
  return (
    <div className="section">
      {/* UseReducer Hook */}
      <Title name="UseReducer() Hook" />

      <div className="wrapper">
        <Example>
          <Calculator />
        </Example>
      </div>
    </div>
  );
};

export default UseReducer;
