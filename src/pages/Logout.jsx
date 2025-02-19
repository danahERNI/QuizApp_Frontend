import React from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Logout() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
          await fetch('https://localhost:7142/api/User/logout', {
            method: 'POST',
            credentials: 'include',
          });
    
          Cookies.remove('authToken');
          alert("Successfully logged out.");
          navigate('/');
        } catch (error) {
          console.error('Logout failed', error);
          alert('Logout failed: ' + error.message);
        }
      };
      return (
        <button onClick={handleLogout} className="text-white hover:bg-red-600 px-4 py-2 rounded-lg transition-all">
          Logout
        </button>
      );

}

export default Logout
