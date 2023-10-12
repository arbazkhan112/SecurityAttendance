import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import Sidebar from '../../components/SideBar/Sidebar'

import './style.css';

export default function SupervisorPassword() {
    return (
        <div>
            <Navbar2 />
            <Sidebar />
            <div className="SUPERVISORPASSWORD_MAIN_CONTAINER">
                <div className="SUPERVISORPASSWORD_LEFT_CONTAINER"></div>
                <div className="SUPERVISORPASSWORD_RIGHT_CONTAINER">
                    <div className="SUPERVISORPASSWORD_H1_CONTAINER">
                        <h1 className="SUPERVISORPASSWORD_H1">Access for Supervisor</h1>
                    </div>
                    <h2 className="SUPERVISORPASSWORD_H2">Give ID and Password to Supervisor for access.</h2>
                    <div className="SUPERVISORPASSWORD_INPUT_CONTAINER">
                        <div className="SUPERVISORPASSWORD_ID_NUMBER">
                            <h2 className="SUPERVISORPASSWORDINPUT_HEADING">ID Number</h2>
                            <input className="SUPERVISORPASSWORDINPUT_BOX" type="text" placeholder='12-457-22' />
                        </div>
                        <div className="SUPERVISORPASSWORD_PASSWORD">
                            <h2 className="SUPERVISORPASSWORDINPUT_HEADING">Password</h2>
                            <input className="SUPERVISORPASSWORDINPUT_BOX" type="password" placeholder='&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;' />
                        </div>
                    </div>
                    <div className="SUPERVISORPASSWORD_BUTTON_CONTAINER">
                        <button className="SUPERVISORPASSWORD_CONFIRM_BUTTON">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
