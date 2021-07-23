import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { isLogin } from '../utils/index';
import { logout } from "../actions/authAction";

function Header() {
    const auth = useSelector((state) => state.authReducer)
    const dispatch = useDispatch();

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
                        <Link to="/" onClick={() => {
                            dispatch(logout())
                        }} style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: 'larger'
                        }}

                        >Logout</Link>
                    </li>}
                    {auth.isLogin === true && <li style={{ padding: '10px', textDecoration: 'none' }}>
                        <Link to="/schedules" style={{
                            textDecoration: 'none',
                            color: 'white',
                            fontSize: 'larger'
                        }}

                        >Schedules</Link>
                    </li>}
                </ul>
            </nav>
        </header >
    );
}

export default Header;
