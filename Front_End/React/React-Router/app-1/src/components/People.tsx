import { NavLink, Outlet } from "react-router-dom";
import { db } from "./db";

const People = () => {
  return (
    <>
      <h1>People Page</h1>
      <nav className="people-nav">
        {[...db.entries()].map(([id]) => (
          <NavLink key={id} to={id}>
            {id}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </>
  );
};

export default People;
