import React from 'react'
import Navbar from '../comp/Navbar'
import QuizCard from '../comp/QuizCard';

function Index() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className=" h-full w-full space-y-2">
          <div className="space-y-3 bg-red">
              <h1 className="uppercase text-xl font-medium">Available Quizzes</h1>
              <div className="border-2 border-black"/>
              <div className="space-y-2">
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
                <QuizCard/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;
