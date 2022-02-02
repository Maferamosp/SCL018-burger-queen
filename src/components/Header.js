import React from "react";
import logochigo from '../logochico.png';



const Header = () => {
 
    return (
<>
<div className="flex justify-center bg-amber-400 w-full">
<img src={logochigo}></img>
  

  <button>
  <i className="fas fa-arrow-circle-left"></i>
  </button>
  </div>

</>
    )
}

export default Header;