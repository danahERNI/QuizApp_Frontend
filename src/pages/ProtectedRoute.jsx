// ProtectedRoute.jsx
import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function ProtectedRoute({ element }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.get('https://localhost:7142/api/User/session-data', {
          withCredentials: true,
        });
        // Assume a valid session returns an object with a valid userId or similar property.
        if (response.data && response.data.userId) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkSession();
  }, []);

  if (isAuthenticated === null) {
    // Optionally, you can display a loading spinner or message while checking.
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/" replace />;
}

export default ProtectedRoute;
