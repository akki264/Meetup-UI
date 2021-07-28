
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authAction";
import { URL } from './../config/constants';
import { Link, useHistory } from "react-router-dom";
import TextField from '@material-ui/core/TextField';


function Login() {

    const [credentials, setCredentials] = useState({
        uName: "",
        password: ""
    });
    const dispatch = useDispatch();
    const [formSubmit, setFormSubmit] = useState(false);
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
        setFormSubmit(true);

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
            <div >
                <form onSubmit={submitForm}>
                    <div>
                        <TextField
                            onChange={handleChange}
                            type="text"
                            name="uName"
                            variant="outlined"
                            label="User Name"
                            value={credentials.uName}
                            style={{ width: 300 }}
                            margin="normal"
                            error={formSubmit && credentials.uName === '' ? true : false}
                            helperText={formSubmit && credentials.uName === '' ? "Username is requied" : ''}
                        />
                    </div>
                    <div>
                        <TextField
                            onChange={handleChange}
                            type="password"
                            name="password"
                            variant="outlined"
                            label="Password"
                            style={{ width: 300 }}
                            value={credentials.password}

                            margin="normal"
                            error={formSubmit && credentials.password === '' ? true : false}
                            helperText={formSubmit && credentials.password === '' ? "Password is required" : ''}
                        /></div>




                    <button type="submit">Login</button>
                    <div>
                        <Link to="/register" style={{
                            textDecoration: 'none',
                            color: '#13a2f5',
                            fontSize: 'larger'
                        }}>Register</Link>
                    </div>


                </form>
            </div>
        </div >
    );


}

export default Login;