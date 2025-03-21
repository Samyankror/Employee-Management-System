import Header from "../other/header";
import Alltask from "../other/Alltask";
import TaskList from "../taskList/TaskList";
function EmployeeDashboard(props){
    return (
      <div className = "h-screen p-10">
      <Header changeUser={props.changeUser} data={props.data} />
      <Alltask data={props.data}/>
      <TaskList data={props.data}  setLoginUserData={props.setLoginUserData}/>
       </div>
    )
}

export default EmployeeDashboard;