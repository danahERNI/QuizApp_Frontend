import React, { useEffect, useState } from "react";
import Login from './Login';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function SessionChecker() {
    const navigate = useNavigate();
  
    useEffect(() => {
      const checkSession = async () => {
        try {
          await axios.get('https://localhost:7142/api/User/session-data', { withCredentials: true});
        } catch(error){
          alert("Error.", error)
        }
      };
        const interval = setInterval(checkSession, 60000);
        return () => clearInterval(interval);
      }, [navigate]);
    
      return null;
}
export default SessionChecker;