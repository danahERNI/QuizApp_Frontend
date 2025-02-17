import QuizManagement from './pages/QuizManagement.jsx'
import Login from './pages/Login.jsx';
import Index from './Index.jsx';
import Register from './pages/Register.jsx';
import CreateQuiz from './pages/CreateQuiz.jsx';
import StudentDash from './pages/StudentDash.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react";
import './index.css'

function App() {

  return(
       
    <Router>
        <Routes>
          {/* <Route path="/*" element={<p>no path</p>}></Route> */}
          {/* <Route path="/" element={<Index/>}></Route> */}
          <Route path="/" element={<Login />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/QuizManagement" element={<QuizManagement />}></Route>
          <Route path="/CreateQuiz" element={<CreateQuiz />}></Route>
          <Route path="/StudentDash" element={<StudentDash />}></Route>
          
        </Routes>
    </Router>
    
  );
}

export default App
