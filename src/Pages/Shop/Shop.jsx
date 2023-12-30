import React from 'react'
import {PRODUCTS} from "../../Pro"
import {Product} from"./Product"
import "./Shop.css"
import Footer from '../../Component/Footer'
                              

const Shop = () => {
  return (
    <>

    <div className='shop'>
    <div className='shoptitle'>
        <h1>Mobile Shop</h1>
    </div> 
    <div className='products'>

        {PRODUCTS.map((product)=>(
            <Product data={product}/>
        ))}  
     </div> 
    </div>
    
    <Footer/>
    </>
  )
}

export default Shop;
