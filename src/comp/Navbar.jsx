import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Logout from '../pages/Logout';
import { Link } from 'react-router-dom';

function Navbar() {
  const [user, setUser] = useState(null);
  const storedUserRole = localStorage.getItem('userRole');
  const storedUserName = localStorage.getItem('userName');

  // setUser({userRole: storedUserRole, username:storedUserName});
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://localhost:7142/api/User/session-data', {
          withCredentials: true,
        });
        setUser(response.data)
        console.log(setUser)
      }catch(error){
        console.error("Error fetching user data.", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        {/* Hello, {user ? `${user.userRole} ${user.userName}` : 'Guest'} */}
        Hello, {user ? `${storedUserRole} ${storedUserName}` : 'Guest'}
      </div>
      <div className="flex space-x-6">
        {storedUserRole === 'Student' && (
          <>
            <Link to="/Index" className="text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all">
              Home
            </Link>
          </>
        )}
        {storedUserRole === 'Teacher' && (
          <>
            <Link to="/CreateQuiz" className="text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all">
              Create Quiz
            </Link>
            <Link to="/QuizManagement" className="text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all">
              Quiz Management
            </Link>
          </>
        )}
        <Link to="/Profile" className="text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all">
          Profile
        </Link>
        <Logout/>
    </div>
    </div>
  );
}

export default Navbar;
