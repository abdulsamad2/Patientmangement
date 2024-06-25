import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getAuthToken } from "../lib/auth";
import { redirect } from "react-router-dom";

interface AuthState {
  user: unknown;
  isError: boolean;
  isLoading: boolean;
  isAuthenticated: boolean;
  accessToken: string;
}

// Initial state
const initialState: AuthState = {
  user: null,
  isLoading: false,
  isError: false,
  accessToken: "",
  isAuthenticated: false,
};

// Create AuthContext with initial state
const AuthContext = createContext<{
  isAuthenticated: boolean;
  accessToken: string;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}>({
  isAuthenticated: initialState.isAuthenticated,
  accessToken: initialState.accessToken,
  isLoading: initialState.isLoading,
  login: () => {},
  logout: () => {},
});

// Auth Provider component
interface AuthProps {
  children: ReactNode;
}

const AuthProvider: React.FC<AuthProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialState.isAuthenticated);
  const [accessToken, setAccessToken] = useState<string>(initialState.accessToken);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  

  useEffect(() => {
    const fetchAuthToken = async () => {
      setIsLoading(true);
      try {
        const token = await getAuthToken();
        if (token) {
          setAccessToken(token);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsError(true);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthToken();
  }, []);

  // Function to login (for demo purposes, we'll just set isAuthenticated to true)
  const login = () => {
    setIsAuthenticated(true);
  };

  // Function to logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    setIsAuthenticated(false);
    setAccessToken("");
    redirect('/login')
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessToken, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
