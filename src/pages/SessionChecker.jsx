import React, { useEffect, useState } from "react";
import Login from './Login';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SessionChecker() {
    const navigate = useNavigate();
    const jwt = localStorage.getItem("authToken");
  
    useEffect(() => {
      if(jwt){
        const checkSession = async () => {
          try {
            await axios.get('https://localhost:7142/api/User/session-data', {
              headers: {Authorization: `Bearer ${jwt}`}
            });
          } catch(error){
            alert("Session has already expired or invalid. Please login again.", error);
            navigate('/');
          }
        };
        const interval = setInterval(checkSession, 10000);
        return () => clearInterval(interval);
      }
    }, [navigate, jwt]);
    
      return null;
}
export default SessionChecker;