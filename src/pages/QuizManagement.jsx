import React from 'react'
import Navbar from '../comp/Navbar.jsx'
import '../index.css'
import Table from '../comp/Table.jsx';

function QuizManagement() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-slate-200 p-20">
      <Table/>
    </div>
  );
}
export default QuizManagement
