import { createContext, useContext } from "react";
interface AuthContextType {
  // user: {
  //   username: string;
  //   fullName: string;
  //   email: string;
  //   password: string;
  // } | null;
  loading: boolean;
  error: string | null;
  login?: (credentials: any) => Promise<void>;
  register: ({}) => Promise<void>;
  logout: () => void;
}


export const AuthContext = createContext<AuthContextType>({
  // user: null,
  loading: false,
  error: null,
  login: async () => {},
  register: async () => {},
  logout: () => {},
});


export const useAuth = () => {
    return useContext(AuthContext)
}