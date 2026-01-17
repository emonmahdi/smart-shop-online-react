/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (data) => {
    const fakeUser = {
      name: "Demo User",
      email: data.email,
      role: data.email === "admin@gmail.com" ? "admin" : "user",
    };

    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const register = (data) => {
    const newUser = {
      name: data.name,
      email: data.email,
      role: "user",
    };

    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
 
