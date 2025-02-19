import QuizManagement from './pages/QuizManagement.jsx'
import Login from './pages/Login.jsx';
import SessionChecker from './pages/SessionChecker.jsx'
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import Logout from './pages/Logout.jsx';
import CreateQuiz from './pages/CreateQuiz.jsx';
import EditModalComp from './comp/EditModalComp.jsx';
import StudentDash from './pages/StudentDash.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import './index.css'

function App() {

  return(
       
    <Router>
      <SessionChecker/>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/QuizManagement" element={<QuizManagement />}></Route>
          <Route path="/CreateQuiz" element={<CreateQuiz />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/StudentDash" element={<StudentDash />}></Route>
          <Route path="/EditModalComp" element={<EditModalComp />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          
        </Routes>
    </Router>
    
  );
}

export default App
