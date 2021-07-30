import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { URL } from './../config/constants';
import { TextField } from "@material-ui/core";
import validMomentTimezones from '../Components/TimeZoneArray';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';


function Register(props) {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        timezone: ""
    });
    const timezoneArray = validMomentTimezones;
    const [formSubmit, setFormSubmit] = useState(false);
    // const dispatch = useDispatch();
    const history = useHistory();
    function handleChange(event) {
        const { name, value } = event.target;

        setContact(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function submitForm(event) {

        setFormSubmit(true);
        fetch(URL + 'register', {
            method: "POST",
            body: JSON.stringify({
                email: contact.email,
                password: contact.password,
                first_name: contact.fName,
                last_name: contact.lName,
                usertimezone: contact.timezone
            }),
            headers: {
                "Content-Type": "application/json",
            }

        }).then(res => res.json())
            .then((res) => {
                console.log(res);

                history.push('/');
            })



        event.preventDefault();
    }

    return (
        < div className="container" >
            <h1>
                Register
            </h1>

            <form onSubmit={submitForm}>
                <div>
                    <TextField
                        onChange={handleChange}
                        type="text"
                        name="fName"
                        variant="outlined"
                        label="First Name"
                        value={contact.fName}
                        style={{ width: 300 }}
                        margin="normal"
                        error={formSubmit && contact.fName === '' ? true : false}
                        helperText={formSubmit && contact.fName === '' ? "First name is requied" : ''}
                    />
                </div>

                <div><TextField
                    onChange={handleChange}
                    type="text"
                    name="lName"
                    variant="outlined"
                    label="Last Name"
                    value={contact.lName}
                    style={{ width: 300 }}
                    margin="normal"
                    error={formSubmit && contact.lName === '' ? true : false}
                    helperText={formSubmit && contact.lName === '' ? "Last name is requied" : ''}
                /></div>

                <div><TextField
                    onChange={handleChange}
                    type="text"
                    name="email"
                    variant="outlined"
                    label="Email"
                    value={contact.email}
                    style={{ width: 300 }}
                    margin="normal"
                    error={formSubmit && contact.email === '' ? true : false}
                    helperText={formSubmit && contact.email === '' ? "Email is requied" : ''}
                /></div>

                <div><TextField
                    onChange={handleChange}
                    type="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    value={contact.password}
                    style={{ width: 300 }}
                    margin="normal"
                    error={formSubmit && contact.password === '' ? true : false}
                    helperText={formSubmit && contact.password === '' ? "Password is requied" : ''}
                /></div>
                <div>
                    <p> ""</p>
                </div>
                <div>
                    {/* <InputLabel id="demo-simple-select-outlined-label">Timezone</InputLabel> */}
                    <Select
                        native

                        id="demo-simple-select-outlined"
                        name="timezone"
                        value={contact.timezone}
                        style={{ width: 300 }}
                        variant="outlined"
                        onChange={handleChange}
                        label="Timezone"
                    >

                        {timezoneArray.map((tz) => (

                            <option value={tz}>{tz}</option>
                        ))}

                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </Select>



                </div>
                <div>
                    <p> ""</p>
                </div>
                <button type="submit">Submit</button>
                <div>
                    <p> ""</p>
                </div>
                <Link to="/" style={{
                    textDecoration: 'none',
                    color: '#13a2f5',
                    fontSize: 'larger'
                }} >Login</Link>
            </form>
        </div >
    );

}

export default Register;
