import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { URL } from './../config/constants';


function Register(props) {

    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        email: "",
        password: ""
    });
    const dispatch = useDispatch();
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
        props.onSub(contact);

        fetch(URL + 'register', {
            method: "POST",
            body: JSON.stringify({
                email: contact.email,
                password: contact.password,
                first_name: contact.fName,
                last_name: contact.lName
            }),
            headers: {
                "Content-Type": "application/json",
            }

        }).then(res => res.json())
            .then((res) => {
                console.log(res);
                dispatch(login(res))
                history.push('/login');
            })



        event.preventDefault();
    }

    return (
        < div className="container" >
            <h1>
                Register
            </h1>

            <form onSubmit={submitForm}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="fName"
                    value={contact.fName}
                    placeholder="First Name"
                />
                <input
                    onChange={handleChange}
                    name="lName"
                    type="text"
                    value={contact.lName}
                    placeholder="Last Name"
                />
                <input
                    onChange={handleChange}
                    name="email"
                    type="text"
                    value={contact.email}
                    placeholder="Email"
                />
                <input
                    onChange={handleChange}
                    name="password"
                    type="password"
                    value={contact.password}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </div >
    );

}

export default Register;
