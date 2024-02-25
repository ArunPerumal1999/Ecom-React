import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PiShoppingCartBold } from "react-icons/pi";
import { CiShop } from "react-icons/ci";
import { SlLogin } from "react-icons/sl";
import { GrContact } from "react-icons/gr";


const Navbar = () => {
  return (
    <>
    <div class="tnav">
    
        <nav id="navbar">
            <ul id="navlist">

                <h1 className='brandname'>PGA</h1>
                <li><NavLink className="nvtext" to="/">Shop <CiShop /></NavLink></li>
                <li><Link  className="nvtext" to="/cont">Contact US <GrContact /></Link></li>
                <li><Link className="nvtext" to="/login">Sign Up <SlLogin /></Link></li>
                <li><Link className="nvtext" to="/Carts"> Cart<PiShoppingCartBold /></Link></li>
            </ul>
        </nav>
    
    </div>
    
    </>
  )
}

export default Navbar
