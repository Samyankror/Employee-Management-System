import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";
 
function ActiveTask({task,data,setLoginUserData}){
    const {userData,setUserData} = useContext(AuthContext);
    const markCompleted = ()=>{
         data.tasks = data.tasks.map((e)=>e.taskTitle===task.taskTitle?{...e,active:false,completed:true}:e);
        
       
        const newData =  userData.map((emp)=>emp.firstName===data.firstName?{...emp,
            taskCounts:{...emp.taskCounts,active:emp.taskCounts.active-1,
                completed:emp.taskCounts.completed+1},tasks:data.tasks}:emp);
        
       setUserData(newData);
        localStorage.setItem('employees',JSON.stringify(newData));
         const login=newData.find((e)=>e.firstName==data.firstName);
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:login}));
         setLoginUserData(login);
         
        
        
    }

    const markFailed = ()=>{
        data.tasks = data.tasks.map((e)=>e.taskTitle==task.taskTitle?{...e,active:false,failed:true}:e);
        
        
        const newData =  userData.map((emp)=>emp.firstName===data.firstName?{...emp,
            taskCounts:{...emp.taskCounts,active:emp.taskCounts.active-1,
                failed:emp.taskCounts.failed+1},tasks:data.tasks}:emp);
       
       setUserData(newData);
        localStorage.setItem('employees',JSON.stringify(newData));
         const login=newData.find((e)=>e.firstName===data.firstName);
        
         localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:login}));
         setLoginUserData(login);
    }
    return(
        
        <div className=" flex-shrink-0 w-[300px]   bg-yellow-600 rounded-4xl p-5">
            <div className="flex justify-between  items-center">
               <h3 className=" bg-red-500 text-center text-[18px] font-semibold rounded-[6px] p-[5px]">{task.category}</h3>
               <h4 className="bg-red-500 text-center text-[18px] font-semibold rounded-[6px] p-[5px]">{task.taskDate}</h4>
            </div>
            <h2 className="text-2xl font-bold mt-5">{task.taskTitle}</h2>
            <p className="mt-2 text-sm">{task.taskDescription}</p>
            <div className="flex justify-between mt-6">
            <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs ' onClick={markCompleted} >Mark as Completed</button>
            <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs' onClick={markFailed}>Mark as Failed</button>
            </div>
        </div>
       
    ) 
}

export default ActiveTask;