import React from 'react'
import ButtonComponent from '../comp/ButtonComponent'
import Textbox from '../comp/Textbox'
import { useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate();
  const handleLoginRedirect = () =>{
    navigate('/');
  };
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-800 w-full h-full p-20 justify-center items-center flex flex-row">
        <div className="w-[460px] bg-slate-400 rounded-xl p-15 space-y-3">
          <div className="text-center">
            <h1 className='text-2xl uppercase font-medium'>Register for a Quizap! Account</h1>
          </div>
          <form className="h-auto">
            <div className='space-y-6'>
              <div className="space-y-3">
                <div>
                  <label htmlFor="email">Name:</label>
                  {/* <input type="text" name="login_email" id="login_email" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' placeholder='email@emailprovider.com'/> */}
                  <Textbox type="text" name="name" id="register_name" placeholder="Annie Batumbakal"/>
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <Textbox type="email" name="email" id="register_email"/>
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <Textbox type="password" name="password" id="register_password"/>
                </div>
              </div>
              <div className="space-y-2">
                <div className="">
                  <ButtonComponent type="submit" label="Create Account" className="w-full text-white hover:bg-slate-700 bg-slate-500 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-800"/>
                </div>
                <div className="">
                  <ButtonComponent type="button" onClick={handleLoginRedirect} label="Login" className="w-full text-black hover:bg-slate-700 bg-slate-500 focus:border-none focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-transparent dark:border-slate-800 dark:border-2 dark:hover:bg-slate-700 dark:focus:ring-slate-800 hover:text-white"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register;