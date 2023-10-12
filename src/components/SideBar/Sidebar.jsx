import React from 'react'
import "./style.css"

export default function Sidebar() {
    return (
        
            <div className="sidebar">
                <a  href="#dashboard">< img src="./images/dashboard 1.png" className='icon' alt=""/>Dashboard</a>
                <hr width="300px"/>
                <a href="#Attendance">< img src="./images/edit 1.png" className='icon' alt=""/>Attendance</a>
                <hr width="300px" />
                <a href="#Add/remove">< img src="./images/update 1.png" className='icon' alt=""/>Add/Remove</a>
                <hr width="300px" />
                <a href="#salarRecord">< img src="./images/payroll 1.png" className='icon' alt=""/>Salary Record</a>
                <hr width="300px" />
            </div>
        
    )
}
