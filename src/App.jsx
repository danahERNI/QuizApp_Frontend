import QuizManagement from './pages/QuizManagement.jsx'
import Login from './pages/Login.jsx';
import SessionChecker from './pages/SessionChecker.jsx'
import Profile from './pages/Profile.jsx';
import Register from './pages/Register.jsx';
import Logout from './pages/Logout.jsx';
import CreateQuiz from './pages/CreateQuiz.jsx';
import Index from './pages/Index.jsx';
import Try from './pages/Try.jsx';
import ProtectedRoute from './pages/ProtectedRoute.jsx';
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

          <Route path="/Index" element={<Index />}></Route>
          <Route path="/Try" element={<Try />}></Route>

          <Route path="/QuizManagement" 
            element={
            <ProtectedRoute allowed={['Teacher']}>
              <QuizManagement/>
            </ProtectedRoute>
            }
          />

          <Route path="/CreateQuiz" 
            element={
            <ProtectedRoute allowed={['Teacher']}>
              <CreateQuiz/>
            </ProtectedRoute>
            }
          />

          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="/Logout" element={<Logout />}></Route>
          
        </Routes>
    </Router>
    
  );
}

export default App
