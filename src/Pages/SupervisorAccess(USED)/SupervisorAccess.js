import React from 'react'
import Navbar2 from '../../components/Navbar2(USED)/Navbar2'
import SupervisorPassword from '../../components/SupervisorPassword(USED)/SupervisorPassword'

export default function SupervisorAccess() {
    return (
        <>
            <div>

                {/* TOP NAVBAR  */}
                <Navbar2 />

                {/* <Sidebar2/> */}

                {/* CENTER CONTAINER CONTAINING ALL ELEMENTS */}
                <div className="SUPERVISOR_CENTER_CONTAINER">


                    {/* CENTER CONTAINER LEFT PART */}
                    {/* <div className="SIDEBAR_Container">  */}
                    <div className="SIDEBAR_Coloumn_Container">
                        <div className="SIDEBAR_Dashboard">
                            <img src="./images/dashboard.png" alt="Dashboard Image" />
                            <h5>Dashboard</h5>
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



                    {/* CENTER CONTAINER RIGHT PART */}
                    <div className="SUPERVISOR_CENTER_RIGHT_CONTAINER">

                        <SupervisorPassword />

                    </div>

                </div>

            </div>

        </>
    )
}
