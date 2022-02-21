import React from "react";
import logobar from '../logobar.png';
import { Link } from "react-router-dom";

const Init = () =>{
    return (
      <div className=" w-screen h-screen flex justify-center ">
        
      <img className="" alt="" src={logobar}></img>
      
      <div className="flex flex-col justify-center ">

      <Link to="/Rest"><button className="w-96 h-12 mt-8  px-5 text-indigo-100 transition-colors 
      duration-150 bg-neutral-900 rounded-full focus:shadow-outline hover:bg-neutral-500">GARZÓN</button></Link>

      <Link to="/Kitchen"><button className="w-96 h-12 mt-8  px-5 text-indigo-100 transition-colors 
      duration-150 bg-neutral-900 rounded-full focus:shadow-outline hover:bg-neutral-500">COCINA</button></Link>
      </div>

    </div>
    )
}

export default Init;