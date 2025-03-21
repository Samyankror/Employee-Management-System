
import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";
function TaskList({data,setLoginUserData}){
     
    return(
      <div id="tasklist" className="flex gap-4 h-[50%] mt-10    flex-nowrap overflow-x-auto p-5">
          
            { data.tasks.map((elem,idx)=>{
               if(elem.active){
                  return <ActiveTask key={idx} task={elem} data={data}  setLoginUserData={setLoginUserData}/>
               }
               if(elem.newTask){
                  return <NewTask key={idx} task={elem} data={data} setLoginUserData={setLoginUserData} />
               }
               if(elem.completed){
                  return <CompletedTask key={idx} task={elem} />
               }
               if(elem.failed){
                  return <FailedTask key={idx} task={elem} />
               }
            })

            }
      </div>
    )
}

export default TaskList;