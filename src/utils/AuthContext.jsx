import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(() => {
    const savedAuthData = localStorage.getItem('authData');
    return savedAuthData ? JSON.parse(savedAuthData) : null;
  });

  const saveAuthData = (data) => {
    setAuthData(data);
    localStorage.setItem('authData', JSON.stringify(data));
  };

  const clearAuthData = () => {
    setAuthData(null);
    localStorage.removeItem('authData');
  };

  return (
    <AuthContext.Provider value={{ authData, saveAuthData, clearAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};
