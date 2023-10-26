import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'
import "./style.css"



export default function SA_SUMMARY() {
    return (
        <>
            <div>

                {/* TOP NAVBAR  */}
                <Navbar2 />

                {/* CENTER CONTAINER CONTAINING ALL ELEMENTS */}
                <div className="SA_SUMMARY_CENTER_CONTAINER">




                    {/* CENTER CONTAINER LEFT PART */}
                    {/* <div className="SIDEBAR_Container">  */}
                    <div className="SIDEBAR_Coloumn_Container">
                        <div className="SIDEBAR_Dashboard">
                            <img src="./images/dashboard.png" alt="Dashboard Image" />
                            <h5> <a href=""></a> Dashboard</h5>
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
                        <div className="SIDEBAR_Summary">
                            <img src="./images/search.png" alt="Search Image" />
                            <h5>Summary</h5>
                        </div>
                    </div>

                    {/* CENTER CONTAINER RIGHT PART */}
                    <div className="SA_SUMMARY_RIGHT_CONTAINER">

                        <div className="SA_SUMMARY_TOP_BOXES_CONTAINER">
                            <div className="SA_SUMMARY_BOX">
                                <p className='SA_SUMMARY_P1'>Security Guards</p>
                                <h1 className='SA_SUMMARY_H1'>35</h1>
                                <p className='SA_SUMMARY_P2'>Security Guards</p>

                            </div>
                            <div className="SA_SUMMARY_BOX">
                                <p className='SA_SUMMARY_P1'>Admins</p>
                                <h1 className='SA_SUMMARY_H1'>19</h1>
                                <p className='SA_SUMMARY_P2'>Admins</p>

                            </div>
                            <div className="SA_SUMMARY_BOX">
                                <p className='SA_SUMMARY_P1'>Post Sites</p>
                                <h1 className='SA_SUMMARY_H1'>170</h1>
                                <p className='SA_SUMMARY_P2'>Post Sites</p>

                            </div>
                            <div className="SA_SUMMARY_BOX">
                                <p className='SA_SUMMARY_P1'>Active Guards</p>
                                <h1 className='SA_SUMMARY_H1'>62</h1>
                                <p className='SA_SUMMARY_P2'>Active Guards</p>

                            </div>




                        </div>



                    </div>








                </div>

            </div>
        </>
    )
}
