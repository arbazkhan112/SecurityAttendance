import * as React from 'react';
import Sidebar2 from '../Sidebar2/Sidebar2'
import { useState } from 'react';
import "./Style.css"


export default function RemoveGuards() {


    const [selectedOption, setSelectedOption] = useState('add');

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };






    return (
        <>
            <div className='REMOVEGUARDS_MAIN_CONTAINER'>
                <Sidebar2 />
                <div className="REMOVEGUARDS_MAIN_CONTAINER2">

                    {/* TOGGLE BUTTONS BELOW */}
                    <div className="REMOVEGUARDS_TOGGLE_BTN">

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





                    <form action="" className='REMOVEGUARDS_INPUT_FORM'>

                        {/* ID NUMBER SECTION */}
                       
                            <h2 className='REMOVEGUARDS_ID_NUMBER_TITLE'>ID Number</h2>
                            <input className='REMOVEGUARDS_ID_NUMBER_INPUT ' type="text" />
                        



                        {/* FIRS TNAME NUMBER SECTION */}
                       
                            <h2 className='REMOVEGUARDS_NAME_TITLE'>Name</h2>
                            <input className='REMOVEGUARDS_NAME_INPUT ' type="text" />
                       




                        {/* LAST NAME NUMBER SECTION */}
                        
                            <h2 className='REMOVEGUARDS_WEAPON_NUMBER_TITLE'>Weapon Number</h2>
                            <input className='REMOVEGUARDS_WEAPON_NUMBER_INPUT ' type="text" />
                       

                    </form>





                    <div className="REMOVEGUARDS_BUTTON">
                        {/* LAST CONTAINER FOR SAVE BUTTON */}
                        <button className='REMOVEGUARDS_SAVE_BTN'>Remove</button>
                    </div>
                </div>
            </div>

        </>
    )
}
