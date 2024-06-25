import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../store/authContext';


export function getAuthToken() {
  const token = localStorage.getItem("accessToken");
  return token;
}



const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    // Show a loading indicator or placeholder while authentication state is being determined
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

