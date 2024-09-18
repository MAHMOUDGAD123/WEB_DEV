import { useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  let userName: string = "";
  const auth = useContext<AuthContextType>(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const isAutherized = auth?.user;

  useEffect(() => {
    if (isAutherized) navigate("/", { replace: true });
  }, [location, navigate, isAutherized]);

  return (
    <div className="login-form">
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => {
          userName = e.target.value;
        }}
      />
      <button
        onClick={() => {
          auth.login(userName);
          navigate("/profile", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
