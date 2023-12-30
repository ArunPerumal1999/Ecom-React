import React ,{useContext} from 'react'
import { PRODUCTS } from '../../Pro'
import { Shopcontext } from '../../Context/Shopcontext'
import Carttem from "./Carttem"
import "./cart.css"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const{cartitems, gettotalcartamount}=useContext(Shopcontext);
    const totalamount =gettotalcartamount()
    const navigate =useNavigate()
  return (
    <div className='cartbox'>
      <div>
        <h1>-- Your Cart Items --</h1>
      </div>
      <div className='cartitem'>
        { PRODUCTS.map((product)=>{
            if(cartitems[product.id]){
                return <Carttem data={product}/>
            }
        })};
      </div>
        {totalamount >=0 ?(
      <div className='checkout'>
        <h3 style={{textAlign:'center'}}><b>Total Amount: RS {totalamount} </b></h3>
        <button onClick={()=> navigate("/")}>Continue Shopping</button>
        <button className='by'>Buy All</button>
      </div>
      ):(
      <h1>Cart is empty</h1>
  )}
    </div>
  );
};
export default Cart;


