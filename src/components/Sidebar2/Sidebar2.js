import React from 'react'
import './Style.css';


export default function Sidebar2() {
    return (
        <>
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
        </>
    )
}
