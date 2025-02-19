import React from 'react';
import Navbar from '../comp/Navbar'
import CreateQuizComponent from '../comp/CreateQuizComponent';

function CreateQuiz() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className="overflow-y-auto space-y-2">
          <div className="space-y-3 bg-red">
            <h1 className="uppercase text-3xl font-medium">Create Quiz</h1>
            <div className="border-2 border-black"/>
          </div>
          <CreateQuizComponent/>
        </div>
      </div>
    </div>
  );
}

export default CreateQuiz;
