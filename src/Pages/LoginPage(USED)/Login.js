import React, { useEffect, useState } from 'react'
import "./LoginCSS.css"

const Login = () => {

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
      <div className="LOGIN_container">
        <div className="LOGIN_left_container">
          <div>
            <img id='LOGIN_logo' src="./images/Group.png" alt="" />
          </div>
          <div className="LOGIN_left_center_container">
            <h1 id='LOGIN_left_h1'>Welcome Back</h1>
            <h2 id='LOGIN_left_h2'>Focus on work whats matter</h2>
            <button id="LOGIN_admin_button">Admin</button>
            <button id="LOGIN_super_button">Super Admin</button>
          </div>
        </div>
        <div className="LOGIN_right_container">
          <h1 id='LOGIN_right_h1'>Admin Account</h1>
          {screenWidth < 700 && (
            <div className='LOGIN_button_box'>
              <button id="LOGIN_admin_button">Admin</button>
              <button id="LOGIN_super_button">Super Admin</button>
            </div>
          )}
          <div className="LOGIN_container_name">
            <h3 id='LOGIN_name_text'>Name</h3>
            <input id='LOGIN_name_input' type="text" placeholder='xyz' />
          </div>
          <div className="LOGIN_container_password">
            <h3 id='LOGIN_password_text'>password</h3>
            <input id='LOGIN_password_input' type="password" placeholder='&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;' />
          </div>
          <div className="LOGIN_forgot_passowrd">
            <h4 id='LOGIN_forgot_text'>Forgot your password?</h4>
          </div>
          <button id="LOGIN_login_button">LOGIN</button>
        </div>
      </div>
    </>
  )
}

export default Login

