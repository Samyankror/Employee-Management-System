
function CompletedTask({task}){

return(
<div className=" flex-shrink-0 w-[300px] h-full  bg-green-700 rounded-4xl p-5">
<div className="flex justify-between  items-center">
   <h3 className="bg-red-500 text-center text-[18px] font-semibold rounded-[6px] p-[5px]">{task.category}</h3>
   <h4 className="bg-red-500 text-center text-[18px] font-semibold rounded-[6px] p-[5px]">{task.taskDate}</h4>
</div>
<h2 className="text-2xl font-bold mt-5">{task.taskTitle}</h2>
<p className="mt-2 text-sm">{task.taskDescription}</p>
<div className="mt-6">
<button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Completed</button>
</div>
</div>
)
}

export default CompletedTask;