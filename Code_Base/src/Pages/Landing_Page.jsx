import React from "react";
import { useNavigate } from "react-router-dom";
import Fast_access_Card from "../Components/Fast_access_Card";
import Role_dashBoard_Card from "../Components/Role_dashBoard_Card";

function Landing_Page() {
  const navigate = useNavigate();

  return (
    <>
 <div className="flex flex-col items-center justify-center text-center min-w-screen min-h-screen    bg-black text-white">
     <div className="flex flex-col gap-12">
           <div className="w-30 text-center flex ml-34 ">
            <h1 className='text-7xl  font-extrabold'>Coding Gita</h1>
        </div>
        <div className="">
            <p className='text-xl'>Smart, simple, and reliable attendance for modern classrooms.</p>
        </div>
        <div className=""><button onClick={() => navigate("/login")} className=' bg-white text-black rounded-lg h-11  w-20 cursor-pointer '>Login</button>

        </div>
     </div>
     <div className="flex gap-9 mt-20 ">
        <Role_dashBoard_Card title = "Role-based dashboards" discription = "Admin, Mentor, and Student experiences tailored to their needs."/>
        <Fast_access_Card title = "Fast and secure access" discription ="Encrypted sessions and streamlined navigation."/>
     </div>
    </div>
    </>
  );
}

export default Landing_Page;
