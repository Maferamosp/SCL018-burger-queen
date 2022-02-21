import React, {useContext} from "react";
import { ContextProducts } from "../App";
import db from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import ClientForm from "./ClientForm";


const Order = () => {
    const contextG = useContext(ContextProducts);
    const totalOrder = contextG.totalOrderAmount;

    const onSubmit = async (e) =>{
        e.preventDefault();

        try {
            await addDoc(collection(db, 'order'), {
                name: contextG.name,
                table: contextG.table,
                orderClient: contextG.products.resumeOrder,
                totalPrice: contextG.totalOrderAmount,
                status: "Pendiente"
            });

            contextG.changeName("");
            contextG.changeTable("");
            contextG.clearProducts();

        } catch (error) {
            console.log('Ingresaste mal los datos');
            console.log(error);
        }
    }
    
return (

    <>
    <ClientForm/>
    <div className="">
        <h1 className="text-2xl font-bold ml-3">Orden:</h1>
        <form action="" onSubmit={onSubmit}>
            <div >
               {contextG.products.resumeOrder.map((order) =>(
                  <div className="flex flex-row justify-between m-8" key={order.id}>
                      <p className="text-lg font-bold">{order.count}</p>
                      <p className="text-lg font-bold">{order.name}</p>
                      <p className="text-lg font-bold">{order.price + "$"}</p>

                      <button type="button" onClick={() => contextG.decrease(order.id)}>
                      <i className="fas fa-minus-circle fa-lg"></i>
                      </button>

                      <button className="h-8 px-5 m-2 text-red-100 transition-colors duration-150 
                      bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800"
                       onClick={() => contextG.removeFromOrder(order.id)}>Eliminar del carrito</button>

                      <button type="button" onClick={() => contextG.increase(order.id)}>
                        <i className="fas fa-plus-circle fa-lg"></i>
                      </button>
                      
                  </div> 

               ))} 
               <h3 className="text-2xl font-bold ml-3">Total compra:{totalOrder}</h3>
            </div>
            <div className="flex justify-center">
            <button type="submit" className="w-96 h-12 px-5 mt-8 text-indigo-100 transition-colors 
            duration-150 bg-neutral-900 rounded-lg focus:shadow-outline hover:bg-neutral-500 ">Enviar a Cocina</button>
            </div>
           
        </form>
    </div>
    </>

)
}
export default Order;