
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authAction";
import { URL } from './../config/constants';
import { useHistory } from "react-router-dom";


function Login() {

    const [credentials, setCredentials] = useState({
        uName: "",
        password: ""
    });
    const dispatch = useDispatch();
    const history = useHistory();
    function handleChange(event) {
        const { name, value } = event.target;

        setCredentials(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    function submitForm(event) {

        fetch(URL + 'login', {
            method: "POST",
            body: JSON.stringify({
                email: credentials.uName,
                password: credentials.password
            }),
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
            .then((res) => {
                console.log(res);
                if (res && res.token) {
                    dispatch(login(res))
                    history.push('/home');
                }
            })
        event.preventDefault();
    }

    return (

        < div className="container" >
            <h1>
                Login
            </h1>

            <form onSubmit={submitForm}>
                <input
                    onChange={handleChange}
                    type="text"
                    name="uName"
                    value={credentials.uName}
                    placeholder="User Name"
                />

                <input
                    onChange={handleChange}
                    type="password"
                    name="password"
                    value={credentials.password}
                    placeholder="Password"
                />

                <button type="submit">Login</button>
                <div>
                    <p> ""</p>
                </div>
                <Link to="/register" >Register</Link>
            </form>
        </div >
    );


}

export default Login;