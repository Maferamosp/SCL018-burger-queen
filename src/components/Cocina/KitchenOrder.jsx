import React, {useContext, useEffect} from "react";
import {ContextProducts} from "../../App"
import { collection, onSnapshot } from "firebase/firestore";
import db from "../../firebaseConfig";
import OrderTable from "./OrderTable";

const KitchenOrder = () =>{
   

    const contextG = useContext(ContextProducts);
    const orders = contextG.orders;
    const showOrder = contextG.showOrder;

    useEffect(() =>{
        onSnapshot(
            collection(db, "order"),
            (snapshoot) =>{
                const arrOrders = snapshoot.docs.map((list)=>{
                    return{...list.data(), id: list.id};
                })
            showOrder(arrOrders);
            }
        )
    }, []);

    const pendingOrders = orders.filter((order) => {
        return order.status.status === "Pendiente";
      })

    return(
        orders.length > 0 &&
        <div>
        {pendingOrders.map((list)=>{
            return <OrderTable
            key={list.id} id={list.id} 
            orderClient={list.orderClient} 
            totalPrice={list.totalPrice}/>  
        })}
        </div>
   
    )
};

export default KitchenOrder;