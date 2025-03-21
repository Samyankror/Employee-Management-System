import React from 'react';

import {useState} from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react';
import { setLocalStorage } from '../../utils/LocalStorage';
function CreateTask({adminData,setLoginUserData}){

    const {userData,setUserData} = useContext(AuthContext);

     const [taskTitle,setTaskTitle] = useState('');
     const [taskDescription,setTaskDescription] = useState('');
     const [taskDate,setTaskDate] = useState('');
     const [assignTo,setAssignTo] = useState('');
     const [category,setCategory] = useState('');

     const handleSubmit = (e)=>{
        e.preventDefault();
        const newTask={
            taskTitle,
            taskDescription,
            taskDate,
            category,
            active: false, newTask: true, failed: false, completed: false
        }

        const data = userData;
        data.forEach((elem)=>{
            if(elem.firstName===assignTo){
                elem.tasks.push(newTask);
                elem.taskCounts.newTask+=1;
            }
            })
           const loginData={...adminData,lastUpdated:new Date().toLocaleDateString('en-US')};
            setUserData(data);
            localStorage.setItem('employees',JSON.stringify(data));
            setLoginUserData(loginData);
            localStorage.setItem('loggedInUser',JSON.stringify({role:'admin',data:loginData}));


        setTaskTitle('');
        setCategory('');
        setAssignTo('');
        setTaskDate('');
        setTaskDescription('');
         

     }

    return (
        <div className="flex justify-center items-center  p-5">
            <form   onSubmit={handleSubmit}
            
            className="flex  justify-between  bg-[#292929a8] gap-16 py-5 px-10 w-full" >
           
            <div className="w-1/2 ">
            <div className="">
                <label  className="text-sm text-gray-300 mb-0.5">Task Title</label> <br />
                <input type="text" placeholder="Make a Ui"  value={taskTitle}
                onChange={(e)=>setTaskTitle(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
            </div>
            <div>
                <label  className="text-sm text-gray-300 mb-0.5">Date</label> <br />
                <input type="date" placeholder="mm-dd--yy" value={taskDate}
                onChange={(e)=>setTaskDate(e.target.value)}
                 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
            </div>

            <div>
                <label  className="text-sm text-gray-300 mb-0.5">Assign To</label> <br />
                <input type="text"  value={assignTo}
                onChange={(e)=>setAssignTo(e.target.value)}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4" />
            </div>

            <div>
                <label className="text-sm text-gray-300 mb-0.5">Category</label> <br />
                <input type="text" placeholder="category" value={category} 
                onChange={(e)=>setCategory(e.target.value)}
                 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"/>
            </div>
            </div>

            <div className="w-1/2">
            <div>
                <label className="text-sm text-gray-300 mb-0.5">Description</label> <br />
                <textarea   rows="9" cols="30" value={taskDescription} 
                onChange={(e)=>setTaskDescription(e.target.value)}
                placeholder="Enter task description..."
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4">
                </textarea>
            </div>

            <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-4/5 ">create a task</button>
            </div>
            </form>
        </div>
    )
}

export default CreateTask;