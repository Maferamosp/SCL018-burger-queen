import React from "react";
import logochigo from '../logochico.png';
import { Link } from "react-router-dom";



const Header = () => {
 
    return (
<>
<div className="flex justify-between bg-amber-400 ">
<img src={logochigo} className="w-80"></img>
  
  <div className="mt-32">
   <a  href="/">
      <i className="fas fa-home fa-3x mx-8"></i>
   </a>

    <a href="/Rest">
      <i className="fas fa-cart-plus fa-3x mx-8"></i>
    </a>
    
    <a href="/Kitchen">
      <i className="fas fa-utensils fa-3x mx-8"></i>
    </a>
    </div>
  </div>

</>
    )
}

export default Header;