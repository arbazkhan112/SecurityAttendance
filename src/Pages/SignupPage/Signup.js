import React, { useEffect, useState } from 'react'
import "./style.css"

const Signup = () => {

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
            <div className="SIGNUP_container">
                <div className="SIGNUP_left_container">
                    <div>
                        <img id='SIGNUP_logo' src="./images/Group.png" alt="" />
                    </div>
                    <div className="SIGNUP_left_center_container">
                        <h1 id='SIGNUP_left_h1'>Welcome Back</h1>
                        <h2 id='SIGNUP_left_h2'>Focus on work whats matter</h2>
                        <button id="SIGNUP_admin_button">Admin</button>
                        <button id="SIGNUP_super_button">Super Admin</button>
                    </div>
                </div>
                <div className="SIGNUP_right_container">

                    <h1 id='SIGNUP_right_h1'>Admin Account</h1>
                    {/* <div className="SIGNUP_RIGHT_CONTAINER_IMG"> */}
                    <img className='SIGNUP_IMG' src="./images/Avatar1.png" alt="" />
                    {/* </div> */}
                    {screenWidth < 700 && (
                        <div className='SIGNUP_button_box'>
                            <button id="SIGNUP_admin_button">Admin</button>
                            <button id="SIGNUP_super_button">Super Admin</button>
                        </div>
                    )}
                    <form action="">

                        <div className="SIGNUP_INPUT_CONTAINER">
                            <div className="SIGNUP_INPUT_CONTAINER_1_ROW">
                                <div className="SIGNUP_INPUT_FULL_NAME_BOX">
                                    <h3 id='SIGNUP_INPUT_FULL_NAME_TEXT'>Full Name</h3>
                                    <input id='SIGNUP_INPUT_FULL_NAME' type="text" />
                                </div>
                                <div className="SIGNUP_CNIC_BOX">
                                    <h3 id='SIGNUP_CNIC_TEXT'>CNIC Number</h3>
                                    <input id='SIGNUP_CNIC_INPUT' type="number" />
                                </div>
                            </div>
                            <div className="SIGNUP_INPUT_CONTAINER_2_ROW">
                                <div className="SIGNUP_INPUT_EMAIL_BOX">
                                    <h3 id='SIGNUP_INPUT_EMAIL_TEXT'>Email ID</h3>
                                    <input id='SIGNUP_INPUT_EMAIL' type="email" />
                                </div>
                                <div className="SIGNUP_PHONE_BOX">
                                    <h3 id='SIGNUP_PHONE_TEXT'>Phone Number</h3>
                                    <input id='SIGNUP_PHONE_INPUT' type="number" />
                                </div>
                            </div>
                            <div className="SIGNUP_INPUT_CONTAINER_3_ROW">
                                <div className="SIGNUP_INPUT_PASSWORD_BOX">
                                    <h3 id='SIGNUP_INPUT_PASSWORD_TEXT'>Password</h3>
                                    <input id='SIGNUP_INPUT_PASSWORD' type="password" />
                                </div>
                                <div className="SIGNUP_CONFIRM_PASSWORD_BOX">
                                    <h3 id='SIGNUP_CONFIRM_PASSWORD_TEXT'>Confirm Password</h3>
                                    <input id='SIGNUP_CONFIRM_PASSWORD_INPUT' type="password" />
                                </div>
                            </div>

                        </div>




                        <button id="SIGNUP_SIGNUP_button">SIGNUP</button>
                    </form>
                </div>
            </div >
        </>
    )
}

export default Signup

