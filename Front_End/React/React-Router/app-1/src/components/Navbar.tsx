import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthContextType } from "./Auth";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext<AuthContextType>(AuthContext);

  return (
    <nav>
      <div className="btn back" onClick={() => navigate(-1)} />
      <NavLink to="/">/</NavLink>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/people">People</NavLink>
      <NavLink to="/items">Items</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {!auth.user && <NavLink to="/login">Login</NavLink>}
      <div className="btn forward" onClick={() => navigate(1)} />
    </nav>
  );
};

export default Navbar;
