import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../utils/index';


function Home() {


    function editProfile() {


    }
    function usersPage() {


    }
    const auth = useSelector(state => state.authReducer);
    const currentUser = auth.user;

    return (
        <div className="home">
            <h1>Welcom {currentUser.first_name + " " + currentUser.last_name}</h1>
            <h3 onClick={editProfile}><Link to="/editprofile" style={{
                textDecoration: 'none',
                color: 'cornflowerblue',
                fontSize: 'larger'
            }} >Edit Profile</Link></h3>

            <h3 onClick={usersPage}><Link to="/users" style={{
                textDecoration: 'none',
                color: 'cornflowerblue',
                fontSize: 'larger'
            }}>Users</Link></h3>


        </div>


    )

}

export default Home;