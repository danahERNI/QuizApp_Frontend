import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({allowed, children}) => {
 const userRole = localStorage.getItem('userRole');
 if(!userRole || !allowed.includes(userRole)){
    alert("Unauthorized to access page.");
    return <Navigate to="/Index" replace/>
 }
 return children;
//  console.log(children)
}

export default ProtectedRoute
