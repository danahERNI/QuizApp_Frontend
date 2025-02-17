import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">
        Hello, Teacher "{`name`}"
      </div>
      <div className="flex space-x-6">
        {/* Links for different sections */}
        <Link to="/CreateQuiz" className="text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all">
          Create Quiz
        </Link>
        <Link to="/QuizManagement" className="text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition-all">
          Quiz Management
        </Link>
        <Link to="/logout" className="text-white hover:bg-red-600 px-4 py-2 rounded-lg transition-all">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
