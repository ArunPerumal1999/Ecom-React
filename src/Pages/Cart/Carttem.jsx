import React, {useContext} from 'react'
import { Shopcontext } from '../../Context/Shopcontext'


 const Carttem = (props) => {
    const{ id, productName, price, productImage}= props.data ;
    const{cartitems, addtocart, removecart,remcart}=useContext(Shopcontext);

    return (
    <div className='cartitm'>
        <img src={productImage} alt='img'/>
        <div className='cartdes'>
            <p><b>{productName}</b></p>
            <p>Rs:{price}</p>
            <div>
            <div className='cartbtn'>
              <button onClick={()=>removecart(id)} className='min'> -</button>
              <input value={cartitems[id]} className='cartinp'/>
              <button onClick={()=>addtocart(id)} className='plu'>+</button>
            </div>
            </div>
            <button onClick={()=>remcart(id)} className='rem'>Remove Item</button>
            <button  className='by'>Buy</button>
        </div>
    </div>
  )
}
export default Carttem;


