import * as React from 'react';
import { useState } from 'react';
import Navbar2 from '../../components/Navbar2(USED)/Navbar2'
import "./Style.css"
// import Sidebar2 from '../../components/Sidebar2/Sidebar2'


//  import SupervisorPassword from '../../components/SupervisorPassword/SupervisorPassword';
import AddGuards from '../../components/AddGuards/AddGuards';
import RemoveGuards from '../../components/RemoveGuards/RemoveGuards';

export default function Supervisor() {

  // const [show, setShow] = useState(true)

  const [selectedOption, setSelectedOption] = useState('add');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };



  return (
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
        </div>
        {/* </div>  */}



        {/* CENTER CONTAINER RIGHT PART */}
        <div className="SUPERVISOR_CENTER_RIGHT_CONTAINER">


          {/* TOGGLE BUTTONS CONTAINER BELOW */}
          <div className="REMOVEGUARDS_TOGGLE_BTN ">
            <div className="REMOVEGUARDS_toggle-button-group">
              <button
                onClick={() => handleOptionChange('add')}
                className={`toggle-button ${selectedOption === 'add' ? 'selected' : ''}`}
              >
                Add
              </button>
              <button
                onClick={() => handleOptionChange('remove')}
                className={`toggle-button ${selectedOption === 'remove' ? 'selected' : ''}`}
              >
                Remove
              </button>
            </div>
          </div>

          {/* ADD/REMOVE CONTAINER CONTAINING FUNCTIONALITY */}
          <div className="SUPERVISOR_CENTER_RIGHT_DOWN_CONTAINER">
            {/* {show ? (<><RemoveGuards /> </>) : (<>{null}</>)} */}
            {/* <RemoveGuards /> */}
            {selectedOption === 'add' ? <AddGuards /> : <RemoveGuards />}

          </div >


          {/* <SupervisorPassword/>  */}
          {/* <AddGuards/>   */}
          {/* <RemoveGuards /> */}

        </div>







      </div>


    </div>

  )
}
