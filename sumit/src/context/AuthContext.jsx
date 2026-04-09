import { createContext, useState } from "react";
import { useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Sumit", role: "Admin" });

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);
