import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import reactRouterLogo from "/react-router.svg";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div className="header">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img
          src={reactRouterLogo}
          className="logo react-router"
          alt="React Router"
        />
      </div>
      <nav>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="*"
          element={<h2 style={{ color: "pink" }}>Not Found!</h2>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
