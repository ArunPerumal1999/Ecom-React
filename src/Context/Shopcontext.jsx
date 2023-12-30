import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../Pro';

export const Shopcontext = createContext(null); 

const getdefaultcart =()=>{
    let cart={};
    for (let i=1; i<PRODUCTS.length; i++){
            cart[i]=0;
    }
    return cart;
}

export const Shopcontextprovider = (props) => {
  const [cartitems, setcartitems]= useState(getdefaultcart);

  const gettotalcartamount=()=>{
    let totalamount= 0;
    for(const item in cartitems){
      if(cartitems[item]>0){
        let itemout= PRODUCTS.find((product)=>product.id===Number(item));
        totalamount+= cartitems[item]*itemout.price
      }
    }
  return totalamount ; 
  }


  const addtocart=(itemId)=>{
    setcartitems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
  };
  const removecart=(itemId)=>{
    setcartitems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
  };
  const remcart=(itemId)=>{
    setcartitems((prev)=>({...prev, [itemId]:prev[itemId]=0}))
  };
  
  const contextvalue = {cartitems , addtocart, removecart,remcart, gettotalcartamount}
  console.log(cartitems);  
  return (
    <div>
      <Shopcontext.Provider value={contextvalue}>{props.children}</Shopcontext.Provider>
    </div>
  )
}

