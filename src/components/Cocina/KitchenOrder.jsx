import React, { useEffect, useContext} from "react";
import {ContextProducts} from "../../App"
import { collection, onSnapshot} from "firebase/firestore";
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

    const pendingOrders = orders.filter((list) => {
        return list.status === "Pendiente";
      })

    return(
        pendingOrders.length > 0 &&
        <div>
        {pendingOrders.map((list)=> {
            return <OrderTable
            key={list.id} 
            id={list.id} 
            orderClient={list.orderClient}
            name={list.name}
            table={list.table} 
            totalPrice={list.totalPrice}
            statuss={list.status}/>  
        })}
        </div>
   
    )
};

export default KitchenOrder;