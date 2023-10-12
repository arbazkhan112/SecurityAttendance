import React from 'react'
import './Navbar2CSS.css';

export default function Navbar2() {
    return (
        <>
        {/* NAVBAR CONTAINER */}
            <div className="NAVBAR2Container">
                {/* LEFT CONTAINER INSIDE NAVBAR CONTAINER */}
                <div id="NAVBAR2leftContainer">
                    <img id='NAVBAR2leftContainerLogo' src="./images/LogoBlack.png" alt="" />
                </div>
                {/* CENTER CONTAINER INSIDE NAVBAR CONTAINER  */}
                <div id="NAVBAR2CenterContainer">
                    <div id="NAVBAR2GuardsNumberContainer">
                        <p id='NAVBAR2GuardsNumberContainerHeading'>Guards</p>
                        <p id='NAVBAR2GuardsNumberContainerHumber'>1550</p>
                    </div>
                    <img id='NAVBAR2GuardsNumberContainerNumberBell' src="./images/Bell.png" alt="" />
                </div>
                {/* RIGHT CONTAINER INSIDE NAVBAR CONTAINER */}
                <div id="NAVBAR2RightContainer">
                    <img id='NAVBAR2RightContainerLogo' src="./images/Avatar1.png" alt="" />
                    <div id="NAVBAR2RightContainerName">
                        <h1 id="NAVBAR2RightContainerNameH1">John Nick</h1>
                        <p id="NAVBAR2RightContainerNameAdminText">Admin Portal</p>
                    </div>
                    <img id='NAVBAR2RightContainerDownLogo' src="./images/Down.png" alt="" /> 
                </div>
            </div>
        </>
    )
}
