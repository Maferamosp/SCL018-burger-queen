import React, {useState} from "react";
// import logochico from '../logochico.png';
import ProductCardFoods from "./ProductCardFoods";
import ProductCardBar from "./ProductCardBar";
import Order from "./Order";
import Header from "./Header";

const Menu = () =>{
    const [menu, seeMenu] = useState(false);
    // const [add, addToOrder] = useState([]);


    return (
        <> 
        <div className="w-full h-max container-lg bg-amber-400 ">
         <Header/>
          <div className="grid grid-rows-2 grid-flow-col gap-4">
            
            <div className="row-span-2 ml-2 rounded-lg w-3/5 ">
            <button className="w-96 h-12 px-5  text-indigo-100 transition-colors 
            duration-150 bg-neutral-900 rounded-lg focus:shadow-outline hover:bg-neutral-500 " 
            onClick={() => seeMenu(true)}>BAR</button>
            { menu && <ProductCardBar/>}
        
            <button className="w-96 h-12 px-5  text-indigo-100 transition-colors 
        duration-150 bg-neutral-900 rounded-lg focus:shadow-outline hover:bg-neutral-500" 
            onClick={() => seeMenu(true)}>COMIDA</button>
            { menu && <ProductCardFoods/>}    
            </div>
           

        <aside className="row-span-1 col-span-2 ml-2 bg-gray-50 rounded-lg w-2/5">
            <Order />

        </aside>

        </div>
        </div>
    </>
    )
}

export default Menu;