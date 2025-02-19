import React from 'react'
import Navbar from '../comp/Navbar.jsx'
import '../index.css'
import Table from '../comp/Table.jsx';

function QuizManagement() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className="overflow-y-auto h-full w-full space-y-2">
          <Table></Table>
        </div>
      </div>
    </div>
  );
}
export default QuizManagement
