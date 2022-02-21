import React, {useContext} from "react";
import { ContextProducts } from "../../App";
import db from "../../firebaseConfig";
import { doc, updateDoc } from "firebase/firestore";



const OrderTable = ({id, orderClient, statuss, name, table,  totalPrice}) =>{
    const contextG = useContext(ContextProducts);
    const status = contextG.status;
    const setStatus = contextG.setStatus;

    const changeStatus = () => {
        setStatus({
            ...status,
            status: "Listo"
        })
    }

    const updateStatus= async (e)=>{
        e.preventDefault();

        try {
            await updateDoc(doc(db, 'order', id), {
                status: setStatus,
            });
        } catch(error){
            console.log("Hubo un error al actualizar el pedido");
            console.log(error)
        }


    

    }
    return(
        <>
        <form action="" onSubmit={updateStatus}>
        <div className="flex justify-between">
        <section className="border-4 rounded-lg border-neutral-900 m-9 w-72 bg-slate-50
         shadow-lg shadow-neutral-900 ">
            <p className="text-lg font-bold">Mesa: {table}</p>
            <p className="text-lg font-bold">Nombre: {name}</p>
            <div>
                {orderClient.map((item) =>(
                    <div>{item.count} {item.name}</div>
                ))}
            </div>
            <p>Total: {totalPrice}</p>
            <p>Estado: {statuss} </p>
            <button type="submit" className="w-40 h-12 px-5 mt-8 text-indigo-100 transition-colors 
            duration-150 bg-neutral-900 rounded-lg 
            focus:shadow-outline hover:bg-neutral-500 mb-3" onClick={changeStatus}>Pedido Listo</button>
        
        </section>
        </div>
        </form>
        </>
    )
}

export default OrderTable;