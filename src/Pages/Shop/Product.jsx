import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext';



export const Product = (props) => {
    const{ id, productName, price, productImage}=props.data;
    const {addtocart, cartitems}= useContext(Shopcontext);

    const cartvalue = cartitems[id]
  return (
 <>
 <div className='outbox'>
    <div className='product'>
      <img src={productImage} alt='images'/>
    </div>
    <div className='description'>
        <h1>{productName}</h1>
        <p>Rs  {price}</p>
    </div>
    <div>
      <center><button className='addtocartbtn' onClick={()=>addtocart(id)}>
        Add TO Cart {cartvalue> 0 &&<>({cartvalue })</> }
      </button></center>
    </div>
    </div>
</>
  )
}

