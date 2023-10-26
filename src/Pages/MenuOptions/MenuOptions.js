import React from 'react'
// IMPORTING ROUTERS
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Supervisor from '../AddRemoveGuards/Supervisor';

export default function MenuOptions() {
    return (
        <>


            <BrowserRouter>
                <Routes>
                    
                  
                    <div>

                        {/* TOP NAVBAR  */}
                        {/* <Navbar2 /> */}

                        {/* CENTER CONTAINER CONTAINING ALL ELEMENTS */}
                        <div className="SUPERVISOR_CENTER_CONTAINER">


                            {/* CENTER CONTAINER LEFT PART */}
                            {/* <div className="SIDEBAR_Container">  */}
                            <div className="SIDEBAR_Coloumn_Container">
                                <div className="SIDEBAR_Dashboard">
                                    <img src="./images/dashboard.png" alt="Dashboard Image" />
                                    <h5><Route path="/a" element={<Supervisor/>}></Route>  Dashboard</h5>
                                </div>
                                <div className="SIDEBAR_Edit">
                                    <img src="./images/edit.png" alt="Dashboard Image" />
                                    <h5>Attendance Record</h5>
                                </div>
                                <div className="SIDEBAR_Update">
                                    <img src="./images/update.png" alt="Dashboard Image" />
                                    <h5>Add / Remove</h5>
                                </div>
                                <div className="SIDEBAR_Payroll">
                                    <img src="./images/payroll.png" alt="Dashboard Image" />
                                    <h5>Salary Record</h5>
                                </div>
                            </div>
                            {/* </div>  */}
                        </div>
                    </div>

                </Routes>
            </BrowserRouter>
        </>
    )
}
