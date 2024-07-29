import axios from "axios";
import { useState, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
const API_URL = "https://petopia-deploy.onrender.com/api/";

export const AuthProvider = (props: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (data: object) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_URL}UserRegistration`, data);
      console.log("register response: ", response.data);
      // save register in localStorage ->

      
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ loading, error, register, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
