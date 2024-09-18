import { useContext } from "react";
import { AuthContext, AuthContextType } from "./Auth";
import { Navigate } from "react-router-dom";

type AuthenticationProps = {
  children: JSX.Element | JSX.Element[];
};

const Authentication = ({ children }: AuthenticationProps) => {
  const auth = useContext<AuthContextType>(AuthContext);

  return (
    <>
      {auth.user ? (
        children
      ) : (
        <Navigate to="/login" state={{ autherized: true }} />
      )}
    </>
  );
};

export default Authentication;
