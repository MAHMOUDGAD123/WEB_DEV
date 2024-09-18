import reactRouter_l from "/react-router-l.svg";
import ThemeSwitch from "./ThemeSwitch";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <img id="logoImg" src={reactRouter_l} alt="react-router" />
        <h1 id="logoTitle">React Router</h1>
      </div>
      <ThemeSwitch />
    </>
  );
};

export default Header;
