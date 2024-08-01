import { createContext, ReactNode } from "react";
import useAuth from "./useAuth";


export const AuthContext = createContext(useAuth());

export const AuthProvider = ({children} : {children : ReactNode}) => {
  const { login, handlerLogin } = useAuth();

  return (
    <AuthContext.Provider value={{ login, handlerLogin }}>
      {children}
    </AuthContext.Provider>
  );
};
