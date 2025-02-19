import React from 'react'
import ProfileComp from '../comp/ProfileComp'
import Navbar from '../comp/Navbar'

function Profile() {
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className=" h-full w-full space-y-2">
          <div className="space-y-3 bg-red">
              <h1 className="uppercase text-3xl font-medium">Update Profile</h1>
              <div className="border-2 border-black"/>
          </div>
          <ProfileComp/>
        </div>
      </div>
    </div>
  )
}

export default Profile
