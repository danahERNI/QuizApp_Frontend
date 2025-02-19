import React from 'react'
import ButtonComponent from './ButtonComponent'

function QuizCard() {
  return (
    <div className='w-full flex flex-row p-2.5 rounded-2xl items-center justify-between bg-transparent h-auto border-2 border-slate-500'>
      <div className=''>
        <p>Lorem ipsum dolor sit.</p>
      </div>
      <div className="">
        <ButtonComponent className="flex flex-row p-2 items-center justify-center text-black hover:text-white hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm  text-center" label="Take Quiz"/>
      </div>
    </div>
  )
}

export default QuizCard
