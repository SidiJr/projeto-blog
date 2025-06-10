import { useState, createContext, useContext, useEffect } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function handleLogin(e, formData) {
    e.preventDefault();

    try {
      const response = await api.post("/login", formData);
      console.log("resposta:", response);

      if (response.data.status === 200) {
        setUser(response.data.data);
        api.defaults.headers.Authorization = `Bearer ${response.data.token}`;
        localStorage.setItem("@App:user", JSON.stringify(response.data.data));
        localStorage.setItem("@App:accessToken", response.data.token);
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Erro ao fazer login");
    }
  }

  function handleLogout() {
    setUser(null);
    localStorage.removeItem("@App:user");
    localStorage.removeItem("@App:accessToken");
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    const storagedToken = localStorage.getItem("@App:accessToken");
    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
