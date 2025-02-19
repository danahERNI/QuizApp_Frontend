import React, { useEffect, useState } from 'react'
import Textbox from '../comp/Textbox'
import axios from 'axios'
import ButtonComponent from '../comp/ButtonComponent'
import Navbar from '../comp/Navbar'
import { useNavigate } from 'react-router-dom'

function Profile() {
const navigate = useNavigate();
  const currentUser = localStorage.getItem('userId');
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`https://localhost:7142/api/User/${currentUser}`, {
          withCredentials: true,
        });
        setUser(response.data)
        console.log(response.data)
      }catch(error){
        console.error("Error fetching user data.", error);
      }
    };
    fetchUser();
  }, []);

  const handleNameChange = (e) =>{
    setUser({...user, name:e.target.value});
  }
  const handleEmailChange = (e) =>{
    setUser({...user, email:e.target.value});
  }
  const handlePasswordChange = (e) =>{
    setUser({...user, password:e.target.value});
  }

  const handleSubmit = async (e) =>{
    
    e.preventDefault();

      const updateUser = async () => {
        try {
          const response = await axios.patch(`https://localhost:7142/api/User/${currentUser}`, user, {
            withCredentials: true,
          });
          console.log(response.data)
          localStorage.setItem('userName', response.data.name);
          localStorage.setItem('userEmail', response.data.email);
          localStorage.setItem('userPassword', response.data.password);
          alert("Changes saved!");
          navigate(0)
        }catch(error){
          console.error("Error updating user data.", error);
        }
      };
      updateUser();
    }
  
  return (
    <div className="w-screen h-screen">
      <div className="bg-slate-200 w-full h-full flex flex-col p-10 space-y-4">
      <Navbar/>
        <div className=" h-full w-full space-y-2">
          <div className="space-y-3 bg-red">
              <h1 className="uppercase text-xl font-medium">Update Profile</h1>
              <div className="border-2 border-black"/>
          </div>
          <form className="w-full space-y-6 bg-slate-200 p-4 rounded-lg">
            <div className="flex flex-row w-full items-center space-x-2">
              <div className="">
                <label htmlFor="name">Name:</label>
              </div>
              <div className="">
                <Textbox type="text" name="name" value={user.name} onChange={handleNameChange}/>
              </div>
            </div>
            <div className="flex flex-row w-full items-center space-x-2">
              <div className="">
                <label htmlFor="email">Email:</label>
              </div>
              <div className="">
                <Textbox type="email" name="email"  value={user.email} onChange={handleEmailChange}/>
              </div>
            </div>
            <div className="flex flex-row w-full items-center space-x-2">
              <div className="">
                <label htmlFor="password">Password:</label>
              </div>
              <div className="">
                <Textbox type="password" name="password"  value={user.password} onChange={handlePasswordChange}/>
              </div>
            </div>
            <ButtonComponent type="submit" label="Apply Changes" onClick={handleSubmit}className="w-full text-black hover:bg-blue-700 bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-800 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
