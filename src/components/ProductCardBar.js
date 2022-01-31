import { isIndexedDBAvailable } from "@firebase/util";
import React, {useContext} from "react";
// import data from "../data.json";
import { ContextProducts } from "../App";

const ProductCardBar = () =>{

const contextG = useContext(ContextProducts);
const menuBar = contextG.products.menuBarArr;



    return (
        <>
           <div className="bg-gray-50 w-96 rounded-lg">
             {menuBar.map((element, index) =>{
                 return ( 
                    <>
                   
                    <div className="border-4 border-neutral-900 rounded w-6/12 mb-8 bg-zinc-400 justify-center">
                        <div className="" key={index.id}>
                         <p className="font-bold text-xl mb-2">{element.name}</p>
                         <p className="font-bold text-xl mb-2">{element.price + "$"}</p>
                        </div>
                        <button className="bg-violet-500 hover:bg-violet-400 active:bg-violet-600 focus:outline-none 
                            focus:ring focus:ring-violet-300 rounded w-full" 
                            onClick={() => contextG.addProducts(element)}key={element.id}>
                             Agregar  
                     </button>
                     </div>
 
                     </>
                 )
             })}
               </div> 
      
        </>
)
}

export default ProductCardBar;