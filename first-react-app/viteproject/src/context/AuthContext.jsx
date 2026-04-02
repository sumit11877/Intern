import { createContext, useContext, useState } from "react";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "ram", role: "admin" });
    const [users, setUsers] = useState({ phone: "samsung", weight: "10" });
    const login = (userData) =>  setUser( userData);
    const loginUsers = (userData) => setUsers(userData);
    const logout = () => setUser(null);
    return (
        <AuthContext.Provider value={{ user, users, login, loginUsers, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};