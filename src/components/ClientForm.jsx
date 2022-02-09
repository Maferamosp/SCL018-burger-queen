import React, {useContext} from "react";
import { ContextProducts } from "../App";

const ClientForm = () => {
    const contextG = useContext(ContextProducts);
    return (
    <div className="">
        <input className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 
        border rounded-lg focus:shadow-outline" type="text" 
        placeholder="Nombre del Cliente"
        value={contextG.name}
        onChange={(e) => contextG.changeName(e.target.value)}/>
        <input className="w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 
        border rounded-lg focus:shadow-outline" type="number"
        placeholder="Número de Mesa"
        value={contextG.table}
        onChange={(e) => contextG.changeTable(e.target.value)}/>
  </div>
    )
}

export default ClientForm;