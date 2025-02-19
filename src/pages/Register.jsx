import React, {useState} from 'react'
import ButtonComponent from '../comp/ButtonComponent'
import Textbox from '../comp/Textbox'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const navigate = useNavigate(); 

  const handleLoginRedirect = () =>{
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
      role,
    };
    console.log(newUser);
    try{
      const response = await fetch('https://localhost:7142/api/User',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });
      if(response.ok){
        alert('Account created successfully!');
        navigate('/');
      }else{
        const error = await response.json();
        alert(`Error: ${error.message}`);
      }
    }catch(error){
      alert('Error: ' + error.message);
    }
  }
  // const handleNameChange = (e) => {
  //   console.log('Name:', e.target.value);
  //   setName(e.target.value);
  // };
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-100 w-full h-full p-20 justify-center items-center flex flex-row">
        <div className="w-[460px] bg-slate-300 rounded-xl p-15 space-y-3">
          <div className="text-center">
            <h1 className='text-2xl uppercase font-medium'>Register for a Quizap! Account</h1>
          </div>
          <form className="h-auto" onSubmit={handleSubmit}>
            <div className='space-y-6'>
              <div className="space-y-3">
                <div>
                  <label htmlFor="email">Name:</label>
                  {/* <input type="text" name="login_email" id="login_email" className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' placeholder='email@emailprovider.com'/> */}
                  <Textbox type="text" name="name" id="register_name" placeholder="Annie Batumbakal" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <Textbox type="email" name="email" id="register_email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <Textbox type="password" name="password" id="register_password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                  <label htmlFor="role">Role:</label>
                  <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5" type="role" name="role" id="register_role" value={role} onChange={(e) => setRole(e.target.value)}> 
                    <option value="" disabled>Select role...</option>
                    <option value="Student">Student</option>
                    <option value="Teacher">Teacher</option>
                  </select>
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