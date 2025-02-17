import React from 'react'
import ButtonComponent from './ButtonComponent'
import AddButtonComp from './AddButtonComp'
import QuestionFormComponent from './QuestionFormComponent'
import RemoveButtonComp from './RemoveButtonComp'
import Textbox from './Textbox'

function CreateQuizComponent() {

  return (
    <div>
        <form className="w-full h-full space-y-6 bg-slate-200 p-4 rounded-lg">
          <div className="space-y-3">
            <label htmlFor="title">Quiz Title:</label>
            <Textbox type="text" name="title" placeholder="Enter quiz title"/>
          </div>
          {/* <ButtonComponent type="button" label="Add Question" className="w-full text-black hover:text-white hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"/> */}
          {/* <AddButtonComp onClick={onClick} label="Add Question"/> */}
          <QuestionFormComponent/>
          <ButtonComponent type="submit" label="Create Quiz" className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
        </form>
    </div>
  )
}

export default CreateQuizComponent
