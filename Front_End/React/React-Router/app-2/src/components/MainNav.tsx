import { NavLink } from "react-router-dom";
import "./main-nav.css";

const MainNav = () => {
  return (
    <nav className="cool-nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/members">Members</NavLink>
      <div className="underline"></div>
    </nav>
  );
};

export default MainNav;
