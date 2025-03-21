import React from 'react';

import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
function NewTask({task,data,setLoginUserData}){
    const {userData,setUserData} = useContext(AuthContext);
    const handleNewTask = ()=>{
        data.tasks = data.tasks.map((e)=>e.taskTitle===task.taskTitle?{...e,active:true,newTask:false}:e);
      
       
        const newData =  userData.map((emp)=>emp.firstName==data.firstName?{...emp,
            taskCounts:{...emp.taskCounts,active:emp.taskCounts.active+1,
                newTask:emp.taskCounts.newTask-1},tasks:data.tasks}:emp);
       
       setUserData(newData);
        localStorage.setItem('employees',JSON.stringify(newData));
         const login=newData.find((e)=>e.firstName===data.firstName);
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:login}));
         setLoginUserData(login);
    }
    return(
        <div className=" flex-shrink-0 w-[300px] h-full  bg-blue-500 rounded-4xl p-5">
        <div className="flex justify-between  items-center">
           <h3 className=" bg-red-500 text-center text-[18px] font-semibold rounded-[6px] p-[5px]">{task.category}</h3>
           <h4 className="bg-red-500 text-center text-[18px] font-semibold rounded-[6px] p-[5px]">{task.taskDate}</h4>
        </div>
        <h2 className="text-2xl font-bold mt-5">{task.taskTitle}</h2>
        <p className="mt-2 text-sm">{task.taskDescription}</p>
        <div className="mt-6">

        <button className='bg-orange-500 rounded font-medium py-1 px-2 text-xs' onClick={handleNewTask}>Accept Task</button>
       
        </div>
    </div>
    )
}
export default NewTask;