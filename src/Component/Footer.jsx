import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom'


const Footer̥ = () => {
  return (
    <div>
<div className='footer'>
    <div>
        <ul className='footerlist'>
            <p><b>Support</b></p>
            <li>E-mail:Pgarunperumal1999@gamil.com</li>
            <li>Phone: 9677470849</li>
            
        </ul>
<br></br>
    <div id="copy"><h3>Copyrights@PGA</h3><br></br>
    <a href='' className='icoe'><FaFacebook /></a>
    <a  className='icoe'><Link to="www.linkedin.com/in/arun-kumar-06104821a"><FaLinkedin /></Link></a>
    <a  href=" " className='icoe'><FaGithub /></a>
    
    </div></div>
    </div>        
    </div>

  )
}

export default Footer̥
