import React from 'react'
import Navbar2 from '../../components/Navbar2/Navbar2'

// import SupervisorPassword from '../../components/SupervisorPassword/SupervisorPassword';
import AddGuards from '../../components/AddGuards/AddGuards';

export default function Supervisor() {
    return (
        <div>
            <Navbar2 />
            {/* <SupervisorPassword/> */}
            <AddGuards/>

        </div>
    )
}
