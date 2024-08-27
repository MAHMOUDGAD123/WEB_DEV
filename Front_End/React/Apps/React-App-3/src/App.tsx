import "./App.css";
import Content from "./Content";

function Header(): JSX.Element {
  return <h2 className="header">THIRD REACT APP</h2>;
}

export default function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}
