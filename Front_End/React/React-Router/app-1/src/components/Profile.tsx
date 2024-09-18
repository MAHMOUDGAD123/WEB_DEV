import { useContext } from "react";
import { AuthContext, AuthContextType } from "./Auth";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const auth = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <h1>
        Welcome <span>{auth.user}</span>
      </h1>
      <button
        style={{ borderRadius: 100 }}
        onClick={() => {
          auth.logout();
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </button>
    </>
  );
};
export default Profile;
