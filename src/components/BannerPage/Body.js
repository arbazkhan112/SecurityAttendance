import React from 'react'
import './BodyCSS.css';

export default function Body() {
  return (
    <>
      {/* BOXES IMAGE */}
      <img id='BANNER_BODY_BOXES_IMG' src="./images/boxes.png" alt="" />

      {/* PAGE CENTER MAIN CONTAINER */}
      <div className="BANNER_BODY_CONTAINER">

        {/* LEFT SUBCONTAINER INSIDE MAIN CONTAINER */}
        <div className="BANNER_BODY_LEFT_SUBCONTAINER">

          {/* CONTAINER CONTAINING TITLE AND STARS IMAGE */}
          <div className="BANNER_BODY_TITLE_STARIMAGE_CONTAINER">

            {/* CONTAINER CONTAINING TITLE */}
            <div className="BANNER_BODY_TITLE_CONTAINER">
              <h1 id='BANNER_BODY_TITLE_H1'>Attendance</h1>
              <h1 id='BANNER_BODY_TITLE_H1'>Management</h1>
              <h1 id='BANNER_BODY_TITLE_H1'>System</h1>
            </div>

            {/* STARS IMAGE */}
            <img id='BANNER_BODY_STARS_IMG' src="./images/stars.png" alt="" />
          </div>

          {/* 2nd HEADING  */}
          <h2 id='BANNER_BODY_H2'>Services You can Trust</h2>

          {/* 3rd HEADING */}
          <p id='BANNER_BODY_P'>Get an efficient Attendance Management System to Monitor your Employees Growth.</p>

          {/* BUTTON - SIGNUP*/}
          <button className="BANNER_BODY_BUTTON BANNER_BODY_SIGNUP_BUTTON">Signup</button>

          {/* BUTTON - LEARN MORE */}
          <button className="BANNER_BODY_BUTTON BANNER BANNER_BODY_LEARNMORE_BUTTON">Learn More</button>
        </div>

        {/* BODY CALENDAR IMAGE */}
        <img id='BANNER_BODY_CALENDAR_IMG' src="./images/calendar.png" alt="Image" />
      </div>
    </>
  )
}
