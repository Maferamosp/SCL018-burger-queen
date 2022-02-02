import React, {useContext} from "react";
import { ContextProducts } from "../App";
import db from "../../src/firebaseConfig";
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
                totalPrice: contextG.totalOrderAmount
            });
        } catch (error) {
            console.log('Ingresaste mal los datos');
            console.log(error);
        }
    }
    
return (

    <>
    <ClientForm/>
    <div className="">
        <h1>ORDEN</h1>
        <form action="" onSubmit={onSubmit}>
            <div>
               {contextG.products.resumeOrder.map((order) =>(
                  <div key={order.id}>
                      <p>{order.name}</p>
                      <p>{order.price + "$"}</p>
                      <button onClick={() => contextG.decrease(order.id)}>-</button>
                      <button onClick={() => contextG.removeFromOrder(order.id)}> eliminar</button>
                      <button onClick={() => contextG.increase(order.id)}>+</button>
                      
                  </div> 

               ))} 
               <h3>Total compra:{totalOrder}</h3>
            </div>
            <div>
            <button>Enviar a Cocina</button>
            </div>
           
        </form>
    </div>
    </>

)
}
export default Order;