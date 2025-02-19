import React from 'react'
import ButtonComponent from './ButtonComponent'
import Textbox from './Textbox'
import QuestionFormComponent from './QuestionFormComponent'

function ProfileComp() {
  return (
    <div>
        <form className="w-full h-full space-y-6 bg-slate-200 p-4 rounded-lg">
          <div className="flex flex-row w-full items-center space-x-2">
            <div className="">
              <label htmlFor="title">Name:</label>
            </div>
            <div className="">
              <Textbox type="text" name="title" placeholder="Enter updated name..."/>
            </div>
          </div>
          <div className="flex flex-row w-full items-center space-x-2">
            <div className="">
              <label htmlFor="title">Email:</label>
            </div>
            <div className="">
              <Textbox type="text" name="title" placeholder="Enter updated email..."/>
            </div>
          </div>
          <div className="flex flex-row w-full items-center space-x-2">
            <div className="">
              <label htmlFor="title">Password:</label>
            </div>
            <div className="">
              <Textbox type="text" name="title" placeholder="Enter updated sassword..."/>
            </div>
          </div>
          <ButtonComponent type="submit" label="Apply Changes" className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
        </form>
    </div>
  )
}

export default ProfileComp
