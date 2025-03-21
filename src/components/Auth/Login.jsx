import React from 'react';

import { useState } from "react";


function Login({handleLogin}){
       const [email,setEmail] = useState("");
       const [password,setPassword] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleLogin(email,password);
        setEmail('');
        setPassword('');
    }
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="border-2 border-red-400 rounded-2 p-20">
                <form  className="flex flex-col gap-2"  onSubmit={handleSubmit}>

                <input className="outline-none border-2 border-red-400 rounded-3xl  text-xl px-3 py-2 m-1
                placeholder:text-gray-400"
                required
                 type="email"
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}
                 autoComplete="email"
                  placeholder="Enter your email" />

                <input className="outline-none border-2 border-red-400 rounded-3xl  text-xl px-3 py-2 m-1
                placeholder:text-gray-400 " 
                required
                 type="password"
                 value={password} 
                 onChange={(e)=>setPassword(e.target.value)}
                autoComplete="current-password"
               
                 placeholder="Enter password"/>

                 <button className="border-2 border-red-400 bg-red-400 text-xl px-3 py-2 m-1 rounded-3xl 
                   font-bold" 
                  
                   >Log in</button>
               
                </form>
            </div>
        </div>
    )
}

export default Login;