import React from 'react'
import "./Navbar.css"
import horizonLogo from '../assets/horizonLogo.png'
import ghanaFlag from '../assets/ghanaFlag.png'
import nigerianFlag from '../assets/nigerianFlag.png'
import kenyanFlag from '../assets/kenyanFlag.png'




function Navbar() {
  return (
    <header>
        <img src={horizonLogo} alt="" className='logo' />
        <nav>
            <ul>
                <ul className="nav-links">
                    <li> <img src={ghanaFlag} alt="" className='flag' /></li>
                    <li> <img src={nigerianFlag} alt="" className='flag' /></li>
                    <li> <img src={kenyanFlag} alt="" className='flag'/></li>
                </ul>


            </ul>
        </nav>

        <div className="about">About Us</div>




    </header>


   
  )
}

export default Navbar
// "../../assets/menu.png";