import React from 'react'
// IMPORTING CSS FOR NAVBAR
import './NavCSS.css';

export default function Navbar() {
  return (
    <>
      <nav className='NAVBAR_CONTAINER'>  
        <div >
          <img id='NAVBAR_LOGO' src="./images/Ellipse.png" alt="LOGO" />  
        </div>
        <div className="NAVBAR_BUTTON_HAMBURGER">  
          <button className="NAVBAR_LOGIN_BUTTON">Login</button>  
          <div className="NAVBAR_HAMBURGER_CONTAINER">       
            <img id='LOGIN_HAMBURGER' src="./images/line1.png" alt="" />    
            <img id='LOGIN_HAMBURGER' src="./images/line2.png" alt="" />
            <img id='LOGIN_HAMBURGER' src="./images/line3.png" alt="" />
          </div>
        </div>
      </nav>

    </>
  )
}
