import { createContext, useState } from "react";

type AuthContextProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export type AuthContextType = {
  user: string;
  login: (username: string) => void;
  logout: () => void;
};

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUserName] = useState<string>(null);

  const login = (userName: string) => {
    setUserName(userName);
  };
  const logout = () => {
    setUserName(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
