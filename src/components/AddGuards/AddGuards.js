import * as React from 'react';
import Sidebar2 from '../Sidebar2/Sidebar2'
import { useState } from 'react';






import './Style.css';


export default function AddGuards() {

    const [selectedOption, setSelectedOption] = useState('add');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };



    const [selectedOption2, setSelectedOption2] = useState(null);

    const handleOptionChange2 = (option2) => {
        setSelectedOption2(option2);

    }




    return (
        <>
            <div className='ADDGUARDS_MAIN_CONTAINER'>
                <Sidebar2 />
                <div className="ADDGUARDS_MAIN_CONTAINER2">

                    {/* TOGGLE BUTTONS BELOW */}
                    <div className="ADDGUARDS_TOGGLE_BTN">

                        <div className="ADDGUARDS_toggle-button-group">
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

                    {/* CENTER CONTAINER FOR INPUT DATA AND PROFILE PICTURE */}
                    <div className="ADDGUARDS_CENTER_CONTAINER">

                        {/* CENTER CONTAINER FOR INPUT DATA ONLY */}
                        <div className="ADDGUARDS_INPUT_CONTAINER">

                            <form action="">
                                <div className="ADDGUARDS_ID_CNIC ADDGUARDS_INPUTBOX">
                                    {/* ID NUMBER SECTION */}
                                    <div className="ADDGUARDS_ID_NUMBER ADDGUARDS_WIDTH">
                                        <h2 className='ADDGUARDS_ID_NUMBER_TITLE'>ID Number</h2>
                                        <input className='ADDGUARDS_ID_NUMBER_INPUT ADDGUARDS_WIDTH2' type="text" />
                                    </div>
                                    {/* CNIC NUMBER SECTION */}
                                    <div className="ADDGUARDS_CNIC_NUMBER ADDGUARDS_WIDTH">
                                        <h2 className='ADDGUARDS_CNIC_NUMBER_TITLE'>CNIC No:</h2>
                                        <input className='ADDGUARDS_CNIC_NUMBER_INPUT ADDGUARDS_WIDTH2' type="text" />
                                    </div>
                                </div>

                                <div className="ADDGUARDS_BOTH_NAMES ADDGUARDS_INPUTBOX">
                                    {/* FIRS TNAME NUMBER SECTION */}
                                    <div className="ADDGUARDS_FIRSTNAME_NUMBER ADDGUARDS_WIDTH">
                                        <h2 className='ADDGUARDS_FIRSTNAME_NUMBER_TITLE'>First Name</h2>
                                        <input className='ADDGUARDS_FIRSTNAME_NUMBER_INPUT ADDGUARDS_WIDTH2' type="text" />
                                    </div>
                                    {/* LAST NAME NUMBER SECTION */}
                                    <div className="ADDGUARDS_LASTNAME_NUMBER ADDGUARDS_WIDTH">
                                        <h2 className='ADDGUARDSLASTNAMEC_NUMBER_TITLE'>Last Name</h2>
                                        <input className='ADDGUARDS_LASTNAME_NUMBER_INPUT ADDGUARDS_WIDTH2' type="text" />
                                    </div>
                                </div>

                                <div className="ADDGUARDS_NUMBER_CITY_RELIGIOUS ADDGUARDS_INPUTBOX">
                                    {/* PHONE NUMBER SECTION */}
                                    <div className="ADDGUARDS_PHONE_NUMBER ADDGUARDS_WIDTH3">
                                        <h2 className='ADDGUARDS_PHONE_NUMBER_TITLE'>Phone Number</h2>
                                        <input className='ADDGUARDS_PHONE_NUMBER_INPUT ADDGUARDS_WIDTH4' type="text" />
                                    </div>
                                    {/* CITY SECTION */}
                                    <div className="ADDGUARDS_CITY_NAME ADDGUARDS_WIDTH3">
                                        <h2 className='ADDGUARDS_CITY_NAME_TITLE'>City</h2>
                                        <input className='ADDGUARDS_CITY_NAME_INPUT ADDGUARDS_WIDTH4' type="text" />
                                    </div>
                                    {/* RELIGIOUS SECTION */}
                                    <div className="ADDGUARDS_RELIGIOUS ADDGUARDS_WIDTH3">
                                        <h2 className='ADDGUARDS_RELIGIOUS_TITLE'>Reigious</h2>
                                        <input className='ADDGUARDS_RELIGIOUS_INPUT ADDGUARDS_WIDTH4' type="text" />
                                    </div>
                                </div>


                                <div className="ADDGUARDS_WEAPON_SALARY_CHECKBOX ADDGUARDS_INPUTBOX">
                                    {/* WEAPON NUMBER SECTION */}
                                    <div className="ADDGUARDS_WEAPON_NUMBER ADDGUARDS_WIDTH5">
                                        <h2 className='ADDGUARDS_WEAPON_NUMBER_TITLE'>Weapon Number</h2>
                                        <input className='ADDGUARDS_WEAPON_NUMBER_INPUT ADDGUARDS_WIDTH6' type="text" />
                                    </div>
                                    {/* SALARY NUMBER SECTION */}
                                    <div className="ADDGUARDS_SALARY ADDGUARDS_WIDTH5">
                                        <h2 className='ADDGUARDS_SALARY_TITLE'>Salary</h2>
                                        <input className='ADDGUARDS_SALARY_INPUT ADDGUARDS_WIDTH6' type="text" />
                                    </div>

                                    <div className="ADDGUARDS_CHECKBOX ADDGUARDS_WIDTH5">

                                        <div className='ADDGUARDS_RADIO_CONTAINER'>
                                            <label className='ADDGUARDS_RADIO_OPTIONS'>
                                                <h6 className='ADDGUARDS_RADIO_OPTIONS2'>Guard</h6>
                                                <input
                                                    type="radio"
                                                    name="options"
                                                    value="option1"
                                                    checked={selectedOption2 === "option1"}
                                                    onChange={() => handleOptionChange2("option1")}
                                                />

                                            </label>
                                        </div>
                                        <div className='ADDGUARDS_RADIO_CONTAINER'>
                                            <label className='ADDGUARDS_RADIO_OPTIONS'>
                                                <h6 className='ADDGUARDS_RADIO_OPTIONS2'>Supervisor</h6>
                                                <input
                                                    type="radio"
                                                    name="options"
                                                    value="option2"
                                                    checked={selectedOption2 === "option2"}
                                                    onChange={() => handleOptionChange2("option2")}
                                                />

                                            </label>
                                        </div>




                                    </div>


                                </div>

                            </form>
                        </div>
                        {/* CENTER CONTAINER FOR PROFILE PICTURE ONLY */}
                        <div className="ADDGUARDS_PROFILE_CONTAINER">
                            <img src="./images/avatar1.png" alt="" />
                        </div>
                    </div>

                    {/* LAST CONTAINER FOR SAVE BUTTON */}
                    <div className="ADDGUARDS_BUTTON">
                        <button className='ADDGUARDS_SAVE_BTN'>Save</button>
                    </div>
                </div>
            </div>

        </>
    )
}

