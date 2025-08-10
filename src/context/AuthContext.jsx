/* eslint-disable react-refresh/only-export-components */
// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState(null);

  // تحميل الحالة من localStorage أول مرة
  useEffect(() => {
    const authState = localStorage.getItem("isAuth") === "true";
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setIsAuth(authState);
    if (savedUser) setUser(savedUser);
  }, []);

  // login: نخزّن بيانات المستخدم ونفعّل الحالة
  const login = (userData) => {
    localStorage.setItem("isAuth", "true");
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuth(true);
    setUser(userData);
  };

  // logout: نمسح كل حاجة
  const logout = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("user");
    setIsAuth(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuth, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
