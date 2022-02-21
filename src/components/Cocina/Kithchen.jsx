import React from "react";
import Header from "../Header";
import KitchenOrder from "./KitchenOrder";

const Kitchen = () =>{
    return (
    <>
    
    <div className=" w-screen h-screen  ">
    <Header/>
        <div className="">
            <KitchenOrder/>
        </div>
        <div>
          
        </div>
    </div>
    </>
    )
}

export default Kitchen;