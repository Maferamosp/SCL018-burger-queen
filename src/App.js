import './App.css';
import React, {useState} from 'react';
import { Route, Routes} from 'react-router-dom';
import Init from './components/Init';
import Menu from './components/Menu';
import Kitchen from './components/Cocina/Kithchen';
import data from "./data.json";

export const ContextProducts = React.createContext();
const dataRest = data.rest;
const dataBar = data.bar;


const App = () =>{
  
  //estado que cambia el nombre y tabla del cliente
  const [name, changeName] = useState("");
  const [table, changeTable] = useState("");

    //estado data de menu para pasar a bar, food y order
    const [products, setProducts] = useState({
      menuRestArr: dataRest,
      menuBarArr: dataBar,
      resumeOrder: []
    });

    const [ orders, showOrder] = useState([]);

    const addProducts = (dish) => {
      return setProducts({
        ...products,
        resumeOrder: products.resumeOrder.find((item) => item.id === dish.id)
          ? products.resumeOrder.map((item) =>
              item.id === dish.id
                ? { ...item, count: item.count + 1 }
                : item
            )
          : [...products.resumeOrder, { ...dish, count: 1 }]
      });
    }
    const clearProducts = () => {
      setProducts({
        ...products,
        resumeOrder: []
      })
    }
    const removeFromOrder = (id) => {
      setProducts({
        ...products,
        resumeOrder: products.resumeOrder.filter((item) => item.id !== id)
      });
    };
  
    
    const increase = (id) => {
      setProducts({
        ...products,
        resumeOrder: products.resumeOrder.map((item) =>
          item.id === id
            ? { ...item, count: item.count + 1 }
            : item
        )
      });
      console.log(products);
    };
  
    const decrease = (id) => {
      setProducts({
        ...products,
        resumeOrder: products.resumeOrder.map((item) =>
          item.id === id
            ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
            : item
        )
      });
    };
  
    const totalOrderAmount = products.resumeOrder
          .reduce((total, dish) => (total = total + dish.price * dish.count), 0)
          .toFixed(2);
  
    const resumeProps = { name, changeName, table, changeTable, products, addProducts,
      removeFromOrder, increase, decrease, totalOrderAmount, orders, showOrder, clearProducts };


  return (
    <>
    <ContextProducts.Provider value={resumeProps}>
    <Routes>
      <Route path="/" element={ <Init/> } />
      <Route path="/Rest" element={ <Menu/> } />
      <Route path="/Kitchen" element={ <Kitchen/> } />
    </Routes>
    </ContextProducts.Provider>
    </>
  );
}



export default App;

