import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { isLogin, getToken } from '../utils/index';
import { logout } from "../actions/authAction";
import TimeZoneDialogue from "./TimeZoneDialogue";
import { timezoneAction } from "../actions/timezoneAction";
import { URL } from "../config/constants";

function Header() {

    const auth = useSelector((state) => state.authReducer)
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    function dialogClose() {
        setOpen(false);
    }

    function onSaveTimezone(tz) {
        console.log(tz);

        fetch(URL + 'updatetimezone', {
            method: "PUT",
            body: JSON.stringify({
                usertimezone: tz.timezone,


            }),
            headers: { "Content-Type": "application/json", "Authorization": "Bearer" + getToken() }


        }).then(res => res.json())
            .then(res => {
                dispatch(timezoneAction(res.timezone));

            })








    }

    return (
        <header>
            <h1>MeetUp</h1>
            <nav >
                <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white', listStyle: 'none' }}>
                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/home" style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: 'larger'
                        }}>Home</Link>
                    </li>}
                    {/* {auth.isLogin === false && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/login">Login</Link>
                    </li>} */}
                    {/* {auth.isLogin === false && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/register">Register</Link>
                    </li>} */}


                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/schedules" style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: 'larger'
                        }}

                        >Schedules</Link>
                    </li>}
                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link onClick={() => {
                            setOpen(true);
                        }} style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: 'larger'
                        }}

                        >Timezone</Link>
                    </li>}
                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/" onClick={() => {
                            dispatch(logout())
                        }} style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: 'larger'
                        }}

                        >Logout</Link>
                    </li>}
                </ul>
            </nav>
            <TimeZoneDialogue
                openDialog={open}
                closeDialog={dialogClose}
                saveDialog={(timezonePassed) => {
                    onSaveTimezone(timezonePassed)
                    setOpen(false)

                }} />
        </header >


    );
}

export default Header;
