import React, { useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios'
import Textbox from '../comp/Textbox.jsx'
import ButtonComponent from '../comp/ButtonComponent.jsx'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();
  const handleRegisterRedirect = () =>{
    navigate('/Register');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email: email,
      password: password
    };
    try{
      const response = await fetch('https://localhost:7142/api/User/login', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(loginInfo),
        credentials: 'include',
      });
      if(response.ok){
        const data = await response.json()
        console.log(data)

        Cookies.set('authToken', data.token, { expires: 7 });
        
        const userRole = data.role;

        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userName', data.name);
        localStorage.setItem('userRole', data.role);
        // console.log("user role",userRole);

        if(userRole === 'Teacher'){
          navigate('/QuizManagement');
        }else if (userRole === 'Student'){
          navigate('/StudentDash')
        }else{
          alert("Invalid role.")
        }

      }else{
        alert(data.message || 'login failed')
      }
    } catch(error) {
      console.error('Login failed', error);
    }
  };
  
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-100 w-full h-full p-20 justify-center items-center flex flex-row">
        <div className="w-[460px] h-[460px] bg-slate-300 rounded-xl p-15 space-y-3">
          <div className="text-center">
            <h1 className='text-2xl uppercase font-medium'>log in to your quizap! account</h1>
          </div>
          <form className="" onSubmit={handleLogin}>
            <div className='space-y-6'>
              <div className="space-y-3">
                <div>
                  <label htmlFor="email">Email:</label>
                  {/* <input type="text" name="login_email" id="login_email" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' placeholder='email@emailprovider.com'/> */}
                  <Textbox type="email" name="email" id="login_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <Textbox type="password" name="password" id="login_password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
              </div>
              <div className="space-y-2">
                <div className="">
                  <ButtonComponent type="submit" label="Login" className="w-full text-white hover:bg-slate-700 bg-slate-500 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-800 dark:hover:bg-slate-700 dark:focus:ring-slate-800"/>
                </div>
                <div className="">
                  <ButtonComponent type="button" onClick={handleRegisterRedirect} label="Register" className="w-full text-black hover:bg-slate-700 bg-slate-500 focus:border-none focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-transparent dark:border-slate-800 dark:border-2 dark:hover:bg-slate-700 dark:focus:ring-slate-800 hover:text-white"/>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}
export default Login;