import React from "react";
import logobar from '../logobar.png';
import { Link } from "react-router-dom";

const Init = () =>{
    return (
      <div className="bg-amber-400 w-full h-full flex justify-center ">
        
      <div className="">
      <img className="" src={logobar}></img>
      
      <div className="flex flex-col ">

      <Link to="/Rest"><button className="w-96 h-12 mt-8  px-5 text-indigo-100 transition-colors 
      duration-150 bg-neutral-900 rounded-full focus:shadow-outline hover:bg-neutral-500">GARZÓN</button></Link>

      <Link to="/Kitchen"><button className="w-96 h-12 mt-8  px-5 text-indigo-100 transition-colors 
      duration-150 bg-neutral-900 rounded-full focus:shadow-outline hover:bg-neutral-500">COCINA</button></Link>
      </div>
    </div>
    </div>
    )
}

export default Init;