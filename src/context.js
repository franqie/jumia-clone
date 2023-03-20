import React, { createContext, useContext, useState } from "react";
import useDataBase from "./utils/useDataBase";



const AppContext = createContext();

const AppProvider = ({children}) => {
  const data = useDataBase(15);
  const [showModal, setShowModal] = useState(false);
  const [showSidemenu, setShowSidemenu] = useState(false);
  const [showRemoveModal, setShowRemoveModal] = useState(false);
  const [productId, setProductId] = useState(1);
  const [cart, setCart] = useState([]);
  const [alert, setAlert] = useState({show: false, msg: ""});
  const [resize, setResize] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [account, setAccount] = useState(false);
  const [help, setHelp] = useState(false);



  const scrollUp = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

  const showProduct = (id)=>{
    setProductId(id);
    setShowModal(true);
  }

  const inCart = (id)=>{
    const checkCart = cart.some((item)=>{
      return item.id === id;
    });
    return checkCart;
  };


  const addItem = (id)=>{
    const newItem = data.find((item)=>item.id === id);

    if(inCart(id)){
      const updatedCart = cart.map((item)=>{
        if(item.id === id){
          return {...item, quantity: item.quantity + 1};
        }
        return item;
      });
      setCart(updatedCart);
      setAlert({show:true, msg:"Product added successfully"});
    } else {
      setCart([...cart, newItem]);
      setAlert({show:true, msg:"Product added successfully"});
    }
  };

  const removeItem = (id)=>{
    const newItem = cart.filter((item)=>item.id !== id);
    setCart(newItem);
    setAlert({show:true, msg:"Product was removed from cart"});
  };


  const changeQty = (e,id)=>{
    const btn = e.target.classList;
    const newCart = cart.map((item)=>{
      if(item.id === id){
        if(btn.contains("dec-btn")  && item.quantity > 1){
          setAlert({show:true, msg:"Item quantity has been updated"});
          return {...item, quantity: item.quantity - 1}
        } else if(btn.contains("inc-btn")){
          setAlert({show:true, msg:"Product added successfully"});
          return {...item, quantity: item.quantity + 1}
        }
      }
      return item;
    });
    setCart(newCart);
  };

  const total = cart.reduce((total,item)=>{
    const {quantity} = item;
    total += quantity;
    return total
  },0);
  
  

  return <AppContext.Provider value={
    {
      scrollUp,
      showModal,
      setShowModal,
      showSidemenu,
      setShowSidemenu,
      productId,
      setProductId,
      showProduct,
      addItem,
      removeItem,
      cart,
      changeQty,
      total,
      showRemoveModal,
      setShowRemoveModal,
      inCart,
      alert,
      setAlert,
      resize,
      hideText,
      setHideText,
      account,
      setAccount,
      help,
      setHelp,
    }
  }>{children}</AppContext.Provider>
}

const useGlobalContext = ()=>{
    return useContext(AppContext);
};

export {AppContext, AppProvider, useGlobalContext};