import React, { useEffect, useState } from 'react'
import "./style.css"

const SA_Login = () => {

    const [screenWidth, setScreenWidth] = useState(null);
    // const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false)
  
    useEffect(() => {
      // Check if we're running in a browser environment before using window
      if (typeof window !== 'undefined') {
        setScreenWidth(window.outerWidth);
  
        // Add an event listener to update screenWidth on window resize
        const handleResize = () => {
          setScreenWidth(window.outerWidth);
        };
  
        window.addEventListener('resize', handleResize);
  
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }
    }, []);
  
  
  
    return (
      <>
        <div className="SA_LOGIN_container">
          <div className="SA_LOGIN_left_container">
            <div>
              <img id='SA_LOGIN_logo' src="./images/Group.png" alt="" />
            </div>
            <div className="SA_LOGIN_left_center_container">
              <h1 id='SA_LOGIN_left_h1'>Welcome Back</h1>
              <h2 id='SA_LOGIN_left_h2'>Focus on work whats matter</h2>
              <button id="SA_LOGIN_admin_button">Admin</button>
              <button id="SA_LOGIN_super_button">Super Admin</button>
            </div>
          </div>
          <div className="SA_LOGIN_right_container">
            <h1 id='SA_LOGIN_right_h1'>Super Admin</h1>
            {screenWidth < 700 && (
              <div className='SA_LOGIN_button_box'>
                <button id="SA_LOGIN_admin_button">Admin</button>
                <button id="SA_LOGIN_super_button">Super Admin</button>
              </div>
            )}
            <div className="SA_LOGIN_container_name">
              <h3 id='SA_LOGIN_name_text'>Name</h3>
              <input id='SA_LOGIN_name_input' type="text" placeholder='xyz' />
            </div>
            <div className="SA_LOGIN_container_password">
              <h3 id='SA_LOGIN_password_text'>password</h3>
              <input id='SA_LOGIN_password_input' type="password" placeholder='&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;' />
            </div>
            <div className="SA_LOGIN_forgot_passowrd">
              <h4 id='SA_LOGIN_forgot_text'>Forgot your password?</h4>
            </div>
            <button id="SA_LOGIN_SA_LOGIN_button">LOGIN</button>
          </div>
        </div>
      </>
    )
  }
  
  export default SA_Login
  
  