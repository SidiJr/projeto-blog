import { useState, createContext, useContext, useEffect } from "react";
import api from "../services/api";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function Login() {
    const response = await api.post("/login", {
      email: "joao.silva@example.com",
      senha: "hash1hash1",
    });
    console.log(response);
    setUser(response.data.data);
    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    // Salva no localStorage
    localStorage.setItem("@App:user", JSON.stringify(response.data.data));
    localStorage.setItem("@App:accessToken", response.data.token);
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:accessToken");
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:token");
    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
