import { useEffect, useState } from 'react'
import React from 'react';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

import AdminDashboard from './components/Dashboard/AdminDashboard';


import { useContext } from 'react';
import { AuthContext } from './context/AuthProvider';



function App() {
   
  

  const [user, setUser] = useState("");
  const {userData, setUserData, adminData} = useContext(AuthContext);
   const [loggedInUserData, setLoggedInUserData] = useState(null);
   //localStorage.clear();
   useEffect(()=>{
    
    const loggedInUser = localStorage.getItem('loggedInUser');
    if(loggedInUser){
     
      
      const userData = JSON.parse(loggedInUser);
    
      setUser(userData.role);
       
      
     if(userData.role==='admin'){
        
        setLoggedInUserData(userData.data);
     }
     else{
      
      setLoggedInUserData(userData.data);
     }
    }
   },[userData])

  const  handleLogin = (email,password)=>{
      if(email=="admin@me.com" && password=='123'){
          setUser('admin');
        
          setLoggedInUserData(adminData[0]);
          localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:adminData[0]}));
      }
      else if(userData){
          const employee = userData.find((e)=>email===e.email && e.password===password);
          if(employee){
          setUser('employee');
          setLoggedInUserData(employee);
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}));
          }
          else{
            alert('Inavlid Credentials');
          }
      }
      else{
         alert('Inavlid Credentials');
      }
  }
  return (
    
    <div className="h-screen">
      
      {!user ? <Login handleLogin={handleLogin}/> :''}
      {user == 'admin' ? <AdminDashboard  changeUser={setUser} adminData={loggedInUserData} 
      setLoginUserData={setLoggedInUserData}/> 
      : user=='employee' ? <EmployeeDashboard changeUser={setUser}
       data={loggedInUserData} setLoginUserData={setLoggedInUserData}/> : null}  
    </div>
    
    
  )
}

export default App
