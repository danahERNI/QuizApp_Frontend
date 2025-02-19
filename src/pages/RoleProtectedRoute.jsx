// RoleProtectedRoute.jsx
import React,  { useState } from 'react';
import SessionChecker from './SessionChecker';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Dummy function to get the current user's role, you can replace this with your actual logic
const getCurrentUserRole = () => {
  return localStorage.getItem('userRole'); // Assuming you're storing the role in localStorage
};

const RoleProtectedRoute = ({ element, allowedRoles }) => {
  const location = useLocation();
  const [sessionValid, setSessionValid] = useState(null);
  const [userRole, setUserRole] = useState(null);
  
  const onSessionValid = (valid) => {
    console.log("in session valid")
    const role = getCurrentUserRole();
  
    setUserRole(role);
    setSessionValid(true);

  };

  const onSessionInvalid = () => {
    setSessionValid(false);
  };


  if(!sessionValid){
    <>
      <SessionChecker onSessionValid={onSessionValid} onSessionInvalid={onSessionInvalid} />
      <div>Loading...</div>
    </>
  }
  if(sessionValid === null){
    console.log("here")
    // return <Navigate to="/" replace />;
  }
  // Check if user has the correct role
  if (!allowedRoles.includes(userRole)) {
    console.log(allowedRoles)
    // return <Navigate to="/403" state={{ from: location }} replace />;
  }

  return element;
};

export default RoleProtectedRoute;
