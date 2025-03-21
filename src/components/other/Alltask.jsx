function Alltask({data}){
    return(
        <div className ="flex mt-10 justify-between screen  p-5 ">
           <div className="w-[23%] py-6 px-9 bg-blue-400 rounded-2xl">
                 <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
                 <h3 className="text-2xl font-medium">New Task</h3>
           </div>
           <div className="w-[23%] py-6 px-9 bg-green-700 rounded-2xl">
                 <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
                 <h3 className="text-2xl font-medium">Completed Task</h3>
           </div>
           <div className="w-[23%] py-6 px-9 bg-yellow-500 rounded-2xl">
                 <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
                 <h3 className="text-2xl font-medium">Active Task</h3>
           </div>
           <div className="w-[23%] py-6 px-9 bg-red-500 rounded-2xl">
                 <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
                 <h3 className="text-2xl font-medium">Failed Task</h3>
           </div>
        </div>
    )
}

export default Alltask;