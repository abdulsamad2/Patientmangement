import React, { createContext, ReactNode, useEffect, useState } from "react";

interface AuthState {
  user: unknown;
  isError: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  accessToken: string;
}

const initialState: AuthState = {
  user: "" || null,
  isLoading: false,
  isError: false,
  accessToken: "",
  isAuthenticated: false,
};
const AuthContext = createContext(initialState);

// Auth Provider component
interface authProps {
  children: ReactNode;
}

const AuthProvider: React.FC<authProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [accessToken, setaccessToken] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setaccessToken(token);
      setIsAuthenticated(true);
    }
  }, []);
  // Function to login (for demo purposes, we'll just set isAuthenticated to true)
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
