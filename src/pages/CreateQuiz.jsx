import React from 'react';
import ButtonComponent from '../comp/ButtonComponent';
import RemoveButtonComp from '../comp/RemoveButtonComp';
import Navbar from '../comp/Navbar'
import Textbox from '../comp/Textbox';
import AddButtonComp from '../comp/AddButtonComp';
import CreateQuizComponent from '../comp/CreateQuizComponent';

function CreateQuiz() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className="overflow-y-scroll space-y-2">
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
