import React from 'react';

import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import TaskListNumber from "../other/TaskListNumber";

function AdminDashboard(props){
    return (
        <div className="px-10">
        <Header changeUser={props.changeUser} data={props.adminData}/>
        <CreateTask adminData={props.adminData} setLoginUserData={props.setLoginUserData} />
        <TaskListNumber />
        </div>
    )
}

export default AdminDashboard;