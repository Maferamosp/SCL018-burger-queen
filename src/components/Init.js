import React from "react";
import logobar from '../logobar.png';
import { Link } from "react-router-dom";

const Init = () =>{
    return (
      <div className="bg-amber-400 w-full h-screen flex justify-center ">
        
      <div className="justify-center">
      <img className="" src={logobar}></img>
      
      <div className="flex flex-col justify-center">
      <Link to="/Rest"><button className="w-3/5 h-12 px-5  text-indigo-100 transition-colors 
      duration-150 bg-neutral-900 rounded-full focus:shadow-outline hover:bg-neutral-500">GARZÓN</button></Link>

      <Link to="/Kitchen"><button className="w-3/5 h-12  px-5 text-indigo-100 transition-colors 
      duration-150 bg-neutral-900 rounded-full focus:shadow-outline hover:bg-neutral-500">COCINA</button></Link>
      </div>
    </div>
    </div>
    )
}

export default Init;