import React, {useState} from "react";
// import logochico from '../logochico.png';
import ProductCardFoods from "./ProductCardFoods";
import ProductCardBar from "./ProductCardBar";
import Order from "./Order";
import Header from "./Header";

const Menu = () =>{
    const [menu, setMenu] = useState(false);
    const [bar, setBar] = useState(false);

    const clickMenuHandler = () =>{
        if(!menu){
            setMenu(true);
            return;
        } setMenu(false);
    }

    const clickMenuHandlerB = () =>{
        if(!bar){
            setBar(true);
            return;
        } setBar(false);
    }


    return (
        <> 
        <div className="w-full md:h-full bg-amber-400 ">
         <Header/>
          <div className="grid grid-rows-2 grid-flow-col gap-4 ml-20">
            
            <div className="row-span-2 ml-4 rounded-lg w-3/5 ">
            <button className="w-96 h-12 px-5  text-indigo-100 transition-colors 
            duration-150 bg-neutral-900 rounded-lg focus:shadow-outline hover:bg-neutral-500 " 
            onClick={clickMenuHandlerB}>BAR</button>
            { bar ? <ProductCardBar/> : null}
        
            <button className="w-96 h-12 px-5 mt-8 text-indigo-100 transition-colors 
        duration-150 bg-neutral-900 rounded-lg focus:shadow-outline hover:bg-neutral-500" 
            onClick={clickMenuHandler}>COMIDA</button>
            { menu ? <ProductCardFoods/> : null}    
            </div>
           

        <aside className="row-span-1 col-span-2 ml-2 bg-gray-50 rounded-lg w-5/6">
            <Order />

        </aside>

        </div>
        </div>
    </>
    )
}

export default Menu;