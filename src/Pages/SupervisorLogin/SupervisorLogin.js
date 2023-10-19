import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Navbar2 from '../../components/Navbar2/Navbar2'
import "./Style.css";
// import Sidebar from '../../components/SideBar/Sidebar'





export default function SupervisorLogin() {
    return (
        <>
            <Navbar2 />
            {/* <Sidebar /> */}
            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                <ToggleButton className='SUPERVISOR_LOGIN_TOGGLE_BTN ' id="tbg-radio-1" value={1}>
                    Add
                </ToggleButton>
                <ToggleButton className='SUPERVISOR_LOGIN_TOGGLE_BTN' id="tbg-radio-2" value={2}>
                    Remove
                </ToggleButton>
            </ToggleButtonGroup>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We will never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

            </Form>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </>
    )
}
