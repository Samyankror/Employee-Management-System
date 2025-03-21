import React from 'react';

function Header(props){
   const  handleLogOut=()=>{
          localStorage.setItem('loggedInUser','');
          props.changeUser('');
   }
    return (
      <div className ="p-5">
        <div className="flex justify-between ">
            <h1 className="text-2xl font-medium">Hello <br/>
             <span className="text-3xl font-semibold">{props.data.firstName} 👌</span></h1>
            <button className="bg-red-500 px-5 py-2 rounded-sm font-bold h-10 mt-4"
            onClick={handleLogOut}
            >Log Out </button>
        </div>
      </div>
    )
}

export default Header;